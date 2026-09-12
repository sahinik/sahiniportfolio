"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import Matter from "matter-js";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type Logo = {
  src: string;
  alt: string;
};

const logos: Logo[] = [
  { src: "/images/about/figma-ball.png", alt: "Figma" },
  { src: "/images/about/framer-ball.png", alt: "Framer" },
  { src: "/images/about/miro-ball.png", alt: "Miro" },
  { src: "/images/about/notion-ball.png", alt: "Notion" },
  { src: "/images/about/claude-ball.png", alt: "Claude" },
  { src: "/images/about/chat-ball.png", alt: "ChatGPT" },
  { src: "/images/about/reve-ball.png", alt: "Reve" },
];

const BALL_SIZE = 62;
const WALL_THICKNESS = 60;
const CEILING_DELAY_MS = 2200;

// A little over a third of the viewport width at md/lg, capped so it never
// crowds out the experience list once the two-column layout kicks in at lg.
const STAGE_SIZE = "h-[220px] w-[220px] sm:w-[280px] md:h-[260px] md:w-[clamp(280px,38vw,480px)]";

/**
 * Sphere-shading overlay: a top-left specular highlight plus a soft
 * bottom-right ambient shadow. These stay on a layer that does NOT rotate
 * with the ball's spin — a lit sphere's highlight stays put on screen as it
 * turns, since the light source is fixed in the world, not on the object.
 * Only the logo texture itself (the `spinRef` layer) tumbles with physics.
 */
function BallFace({ logo, spinRef }: { logo: Logo; spinRef?: (el: HTMLDivElement | null) => void }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_4px_8px_rgba(36,59,94,0.16)]">
      <div ref={spinRef} className="absolute inset-0" style={{ willChange: "transform" }}>
        <Image
          src={logo.src}
          alt=""
          width={104}
          height={104}
          sizes={`${BALL_SIZE}px`}
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="h-full w-full object-cover"
          style={{ WebkitUserDrag: "none" } as CSSProperties}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 26%, rgba(255,255,255,0.55), rgba(255,255,255,0.12) 32%, transparent 56%)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 68% 80%, rgba(10,16,28,0.3), transparent 55%), radial-gradient(circle at 50% 50%, transparent 55%, rgba(10,16,28,0.22) 100%)",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}

/**
 * A physics-driven "sticker wall" of tech-stack logos (à la Framer's Physics
 * Sticker Wall marketplace component): the balls drop in, settle and pile up
 * under gravity, and can be grabbed and flung around the stage. Positions
 * are written straight to each ball's transform from the Matter.js engine
 * loop rather than through React state, since that loop runs every frame.
 */
export function TechStackBalls() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRefs = useRef<(HTMLDivElement | null)[]>([]);
  const spinRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduced) return;
    const container = containerRef.current;
    if (!container) return;

    const initialRect = container.getBoundingClientRect();
    const radius = BALL_SIZE / 2;

    const engine = Matter.Engine.create();
    engine.gravity.y = 1.1;

    // Floor/left/right/ceiling are rebuilt (not just moved) whenever the box
    // resizes, so the physical boundary always matches the box's current
    // rendered size instead of drifting stale after a viewport resize.
    function buildSideWalls(width: number, height: number) {
      return [
        Matter.Bodies.rectangle(width / 2, height + WALL_THICKNESS / 2, width + WALL_THICKNESS * 2, WALL_THICKNESS, {
          isStatic: true,
        }),
        Matter.Bodies.rectangle(-WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height + WALL_THICKNESS * 2, {
          isStatic: true,
        }),
        Matter.Bodies.rectangle(width + WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height + WALL_THICKNESS * 2, {
          isStatic: true,
        }),
      ];
    }
    function buildCeiling(width: number) {
      return Matter.Bodies.rectangle(width / 2, -WALL_THICKNESS / 2, width + WALL_THICKNESS * 2, WALL_THICKNESS, {
        isStatic: true,
      });
    }

    let sideWalls = buildSideWalls(initialRect.width, initialRect.height);
    // The ceiling is added after the initial drop-in so the balls can fall in
    // from above the visible box first; once settled, it seals the top edge
    // so a flung ball bounces back down instead of sailing out of the stage.
    let ceiling = buildCeiling(initialRect.width);
    let ceilingSealed = false;

    Matter.Composite.add(engine.world, sideWalls);

    const ceilingTimeout = window.setTimeout(() => {
      ceilingSealed = true;
      Matter.Composite.add(engine.world, ceiling);
    }, CEILING_DELAY_MS);

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      Matter.Composite.remove(engine.world, sideWalls);
      sideWalls = buildSideWalls(width, height);
      Matter.Composite.add(engine.world, sideWalls);

      if (ceilingSealed) Matter.Composite.remove(engine.world, ceiling);
      ceiling = buildCeiling(width);
      if (ceilingSealed) Matter.Composite.add(engine.world, ceiling);
    });
    resizeObserver.observe(container);

    const bodies = logos.map((_, index) =>
      Matter.Bodies.circle(
        radius + Math.random() * Math.max(initialRect.width - BALL_SIZE, 0),
        -radius - index * (BALL_SIZE + 28),
        radius,
        {
          restitution: 0.55,
          friction: 0.2,
          frictionAir: 0.015,
          density: 0.0018,
        },
      ),
    );
    bodies.forEach((body) => Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.2));

    Matter.Composite.add(engine.world, bodies);

    const mouse = Matter.Mouse.create(container);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, damping: 0.15 },
    });
    Matter.Composite.add(engine.world, mouseConstraint);

    // A real drag/touch can easily carry the cursor or finger outside the
    // box's small rectangle (touchmove in particular keeps firing on this
    // element for the whole gesture, even once the finger is way outside
    // it). Clamped here, so the spring's pull target can never sit past a
    // wall and drag a ball through it — the boundary stays strict even
    // mid-fling.
    const clampMouseToRoom = () => {
      const { width, height } = container.getBoundingClientRect();
      mouse.position.x = Math.min(Math.max(mouse.position.x, radius), Math.max(width - radius, radius));
      mouse.position.y = Math.min(Math.max(mouse.position.y, radius), Math.max(height - radius, radius));
    };
    container.addEventListener("mousemove", clampMouseToRoom);
    container.addEventListener("touchmove", clampMouseToRoom);

    const setGrabbing = () => container.classList.add("cursor-grabbing");
    const clearGrabbing = () => container.classList.remove("cursor-grabbing");
    Matter.Events.on(mouseConstraint, "startdrag", setGrabbing);
    Matter.Events.on(mouseConstraint, "enddrag", clearGrabbing);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    const syncPositions = () => {
      bodies.forEach((body, index) => {
        const el = ballRefs.current[index];
        if (el) el.style.transform = `translate3d(${body.position.x - radius}px, ${body.position.y - radius}px, 0)`;
        const spin = spinRefs.current[index];
        if (spin) spin.style.transform = `rotate(${body.angle}rad)`;
      });
    };
    Matter.Events.on(engine, "afterUpdate", syncPositions);

    return () => {
      window.clearTimeout(ceilingTimeout);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", clampMouseToRoom);
      container.removeEventListener("touchmove", clampMouseToRoom);
      Matter.Events.off(engine, "afterUpdate", syncPositions);
      Matter.Events.off(mouseConstraint, "startdrag", setGrabbing);
      Matter.Events.off(mouseConstraint, "enddrag", clearGrabbing);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(engine.world, false);
      Matter.Engine.clear(engine);
      // @types/matter-js doesn't declare these handler properties, but Mouse.setElement
      // attaches exactly these functions at runtime — removed here since Matter has no
      // built-in "detach" API.
      const handlers = mouse as unknown as Record<"mousemove" | "mousedown" | "mouseup" | "mousewheel", (event: Event) => void>;
      container.removeEventListener("mousemove", handlers.mousemove);
      container.removeEventListener("mousedown", handlers.mousedown);
      container.removeEventListener("mouseup", handlers.mouseup);
      container.removeEventListener("wheel", handlers.mousewheel);
      container.removeEventListener("touchmove", handlers.mousemove);
      container.removeEventListener("touchstart", handlers.mousedown);
      container.removeEventListener("touchend", handlers.mouseup);
    };
  }, [reduced]);

  if (reduced) {
    return (
      <div
        className={`flex flex-wrap items-center justify-center gap-3 rounded-lg bg-mist/40 p-4 ${STAGE_SIZE}`}
        aria-hidden="true"
      >
        {logos.map((logo) => (
          <div key={logo.src} style={{ width: BALL_SIZE, height: BALL_SIZE }}>
            <BallFace logo={logo} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative touch-none overflow-hidden rounded-lg bg-mist/40 [&.cursor-grabbing_*]:cursor-grabbing ${STAGE_SIZE}`}
      aria-hidden="true"
    >
      {logos.map((logo, index) => (
        <div
          key={logo.src}
          ref={(el) => {
            ballRefs.current[index] = el;
          }}
          className="absolute left-0 top-0 cursor-grab select-none"
          style={{ width: BALL_SIZE, height: BALL_SIZE, willChange: "transform" }}
        >
          <BallFace
            logo={logo}
            spinRef={(el) => {
              spinRefs.current[index] = el;
            }}
          />
        </div>
      ))}
    </div>
  );
}
