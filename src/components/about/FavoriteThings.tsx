import Image from "next/image";

const items = [
  { src: "/images/favorites/fav-1.png", alt: "A favorite album cover", rotate: -8, shape: "rounded-lg", fill: "bg-navy", className: "w-36 sm:w-44" },
  { src: "/images/favorites/fav-7-scan.png", alt: "A film photo of a sunset over the water", rotate: 4, shape: "rounded-lg", fill: "bg-mist", className: "w-40 sm:w-48" },
  { src: "/images/favorites/fav-9-img3789.png", alt: "A dish of jewelry beside a hand-painted ceramic figure", rotate: -5, shape: "rounded-full", fill: "bg-mist", className: "w-36 sm:w-44" },
  { src: "/images/favorites/fav-6-object.png", alt: "A small plush cat toy", rotate: 6, shape: "rounded-full", fill: "bg-mist", className: "w-32 sm:w-40" },
];

export function FavoriteThings() {
  return (
    <div className="py-16 sm:py-20">
      <h2 className="text-center font-serif italic text-3xl text-ink sm:text-4xl">
        some favorite things
      </h2>
      <div className="mt-14 flex flex-wrap items-end justify-center gap-x-6 gap-y-10 sm:gap-x-10">
        {items.map((item) => (
          <div
            key={item.src}
            className={`relative aspect-square overflow-hidden border-4 border-paper shadow-[0_18px_36px_-18px_rgba(58,56,52,0.35)] ${item.shape} ${item.fill} ${item.className}`}
            style={{ transform: `rotate(${item.rotate}deg)` }}
          >
            <Image src={item.src} alt={item.alt} fill sizes="200px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
