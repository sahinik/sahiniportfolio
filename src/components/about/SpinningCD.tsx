"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SPOTIFY_TRACK_ID = "0K4p7uv5Pw5NE8LrF6HE7q";
const TRACK_TITLE = "Avalon";
const TRACK_ARTIST = "DPR Ian";

// The disc's position within the 599x535 case artwork, measured against the
// original flattened cutout (music-fav.png) so the split case + disc reads
// pixel-identical to the composited version it replaced.
const DISC_LEFT = (99 / 599) * 100;
const DISC_TOP = (42 / 535) * 100;
const DISC_WIDTH = (444 / 599) * 100;
const DISC_HEIGHT = (444 / 535) * 100;

const WAVEFORM_BARS = [
  { height: 8, delay: 0 },
  { height: 14, delay: 0.12 },
  { height: 10, delay: 0.24 },
  { height: 13, delay: 0.36 },
];

interface SpotifyEmbedController {
  play: () => void;
  pause: () => void;
  addListener: (event: "playback_update", callback: (event: { data: { isPaused: boolean } }) => void) => void;
}

interface SpotifyIframeApi {
  createController: (
    element: HTMLElement,
    options: { uri: string; width?: string | number; height?: string | number },
    callback: (controller: SpotifyEmbedController) => void,
  ) => void;
}

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (IFrameAPI: SpotifyIframeApi) => void;
  }
}

/**
 * A jewel-case CD that spins and plays a real Spotify track on click —
 * replicates the "click to play" interaction from Framer's DiscPlayer
 * component (https://www.framer.com/marketplace/components/discplayer/),
 * minus its extra chrome. The case and disc are separate cutouts (split
 * from the original flattened image) so the disc alone can rotate.
 *
 * Playback runs through Spotify's iFrame Embed API — the only way to play
 * real audio here without requiring visitors to log in — with the actual
 * widget kept visually minimal since the spinning disc + caption are the
 * intended UI, not Spotify's own player chrome.
 */
export function SpinningCD() {
  const [playing, setPlaying] = useState(false);
  const embedHostRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<SpotifyEmbedController | null>(null);

  useEffect(() => {
    const host = embedHostRef.current;
    if (!host) return;

    const setup = (IFrameAPI: SpotifyIframeApi) => {
      IFrameAPI.createController(
        host,
        { uri: `spotify:track:${SPOTIFY_TRACK_ID}`, width: "100%", height: "80" },
        (controller) => {
          controllerRef.current = controller;
          controller.addListener("playback_update", (event) => {
            setPlaying(!event.data.isPaused);
          });
        },
      );
    };

    window.onSpotifyIframeApiReady = setup;

    if (!document.getElementById("spotify-iframe-api")) {
      const script = document.createElement("script");
      script.id = "spotify-iframe-api";
      script.src = "https://open.spotify.com/embed/iframe-api/v1";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  function handleClick() {
    const next = !playing;
    setPlaying(next);
    if (next) {
      controllerRef.current?.play();
    } else {
      controllerRef.current?.pause();
    }
  }

  return (
    <div className="relative w-full">
      {playing && (
        <div className="absolute -top-9 left-0 flex items-center gap-1.5 whitespace-nowrap font-sans text-sm italic text-caption">
          <span className="flex h-3.5 items-end gap-[2px]" aria-hidden>
            {WAVEFORM_BARS.map((bar, index) => (
              <span
                key={index}
                className="w-[2.5px] origin-bottom rounded-full bg-caption [animation:waveform-bar_0.9s_ease-in-out_infinite]"
                style={{ height: bar.height, animationDelay: `${bar.delay}s` }}
              />
            ))}
          </span>
          now playing {TRACK_TITLE} by {TRACK_ARTIST}
        </div>
      )}

      <button
        type="button"
        onClick={handleClick}
        aria-pressed={playing}
        aria-label={
          playing ? `Pause ${TRACK_TITLE} by ${TRACK_ARTIST}` : `Play ${TRACK_TITLE} by ${TRACK_ARTIST}`
        }
        data-cursor-badge={playing ? "pause" : "what i’ve been listening to, click to play!"}
        data-cursor-icon={playing ? "pause" : "play"}
        className="relative block w-full cursor-pointer appearance-none border-0 bg-transparent p-0"
      >
        <div className="relative aspect-[599/535] w-full">
          {/* Disc sits behind the case so the case's plastic edges overlap
              its rim, like a real CD seated in the tray. */}
          <div
            className="absolute overflow-hidden rounded-full"
            style={{ left: `${DISC_LEFT}%`, top: `${DISC_TOP}%`, width: `${DISC_WIDTH}%`, height: `${DISC_HEIGHT}%` }}
          >
            <Image
              src="/images/favorites/music-disc.png"
              alt=""
              fill
              sizes="222px"
              className="pointer-events-none object-cover [animation:spin_3s_linear_infinite]"
              style={{ animationPlayState: playing ? "running" : "paused" }}
            />
          </div>
          <Image
            src="/images/favorites/music-case.png"
            alt="A CD in a jewel case, one of my favorite albums"
            fill
            sizes="299px"
            className="pointer-events-none object-contain"
          />
        </div>
      </button>

      {/* Spotify's iFrame API replaces this exact node with the actual
          <iframe>, so the "make it invisible" styling has to live on a
          wrapper that survives that swap, not on the node being replaced. */}
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
        <div ref={embedHostRef} />
      </div>
    </div>
  );
}
