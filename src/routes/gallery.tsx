import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import founderImg from "@/assets/founder.webp";
import { useLang } from "@/components/LanguageContext";

const examImages = import.meta.glob<string>('@/assets/examimgassam/*.webp', { eager: true, query: '?url', import: 'default' });

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SOFURA Exam Centres Across Assam" },
      { name: "description", content: "Photo gallery from SOFURA exam centres across Guwahati, Jorhat, Dibrugarh, Silchar, Tezpur and beyond." },
    ],
  }),
  component: Gallery,
});

const PHOTOS = Object.values(examImages).map((src) => ({
  src,
  caption: "Sofura Talent Examination",
}));

const ARCHIVES = [
  { src: founderImg, caption: "Editorial meeting, Guwahati — 1985" },
  { src: founderImg, caption: "Magazine launch — 1982" },
  { src: founderImg, caption: "First scholarship ceremony — 1989" },
];

function Gallery() {
  const { t } = useLang();
  const [visible, setVisible] = useState(8);
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);
  const shown = PHOTOS.slice(0, visible);
  const hasMore = visible < PHOTOS.length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t("Gallery", "চিত্ৰশালা")}</span>
      <h1 className="mt-2 font-serif text-5xl font-bold text-primary md:text-6xl">{t("Glimpses of Sofura Talent Examination Across Assam", "অসমজুৰি সঁফুৰা প্ৰতিভা পৰীক্ষাৰ ঝলক")}</h1>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {shown.map((p, i) => (
          <button
            key={i}
            onClick={() => setLightbox({ src: p.src, caption: p.caption })}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card aspect-square focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <img src={p.src} alt={p.caption} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-left opacity-0 transition group-hover:opacity-100">
              <div className="text-xs font-semibold text-white">{p.caption}</div>
            </div>
          </button>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + 8)}
            className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-8 py-3.5 font-play text-sm font-bold text-[#FF9F45] transition hover:bg-[#FFD93D]/30 hover:shadow-md"
          >
            {t("See More", "আৰু চাওক")} <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Archives */}
      <section className="mt-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t("1980s", "১৯৮০ৰ দশক")}</span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-primary md:text-4xl">{t("Historical Archives", "ঐতিহাসিক সংগ্ৰহ")}</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {ARCHIVES.map((a, i) => (
            <button
              key={i}
              onClick={() => setLightbox({ src: a.src, caption: a.caption })}
              className="group overflow-hidden rounded-2xl border border-border bg-card text-left"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={a.src} alt={a.caption} loading="lazy" className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105" />
              </div>
              <div className="p-4 text-sm font-medium text-primary">{a.caption}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <button onClick={() => setLightbox(null)} aria-label="Close" className="absolute top-4 right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-4xl">
            <img src={lightbox.src} alt={lightbox.caption} className="max-h-[80vh] w-full rounded-2xl object-contain" />
            <figcaption className="mt-4 text-center text-sm text-white/90">{lightbox.caption}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
