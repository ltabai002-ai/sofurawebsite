import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import founderImg from "@/assets/founder.jpg";
import magazineImg from "@/assets/magazine-cover.jpg";
import { useLang } from "@/components/LanguageContext";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SOFURA Exam Centres Across Assam" },
      { name: "description", content: "Photo gallery from SOFURA exam centres across Guwahati, Jorhat, Dibrugarh, Silchar, Tezpur and beyond." },
    ],
  }),
  component: Gallery,
});

const YEARS = ["All", "2024", "2023", "2022", "2021"];
const REGIONS = ["All", "Guwahati", "Jorhat", "Dibrugarh", "Silchar", "Tezpur"];

const PHOTOS = [
  { src: heroImg, year: "2024", region: "Guwahati", caption: "Guwahati Centre — 2024" },
  { src: magazineImg, year: "2024", region: "Jorhat", caption: "Jorhat Centre — 2024" },
  { src: heroImg, year: "2023", region: "Dibrugarh", caption: "Dibrugarh Centre — 2023" },
  { src: magazineImg, year: "2023", region: "Silchar", caption: "Silchar Centre — 2023" },
  { src: heroImg, year: "2022", region: "Tezpur", caption: "Tezpur Centre — 2022" },
  { src: magazineImg, year: "2022", region: "Guwahati", caption: "Guwahati Centre — 2022" },
  { src: heroImg, year: "2021", region: "Jorhat", caption: "Jorhat Centre — 2021" },
  { src: magazineImg, year: "2021", region: "Dibrugarh", caption: "Dibrugarh Centre — 2021" },
];

const ARCHIVES = [
  { src: founderImg, caption: "Editorial meeting, Guwahati — 1985" },
  { src: founderImg, caption: "Magazine launch — 1982" },
  { src: founderImg, caption: "First scholarship ceremony — 1989" },
];

function Gallery() {
  const { t } = useLang();
  const [year, setYear] = useState("All");
  const [region, setRegion] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  const filtered = useMemo(
    () => PHOTOS.filter((p) => (year === "All" || p.year === year) && (region === "All" || p.region === region)),
    [year, region]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t("Gallery", "চিত্ৰশালা")}</span>
      <h1 className="mt-2 font-serif text-5xl font-bold text-primary md:text-6xl">{t("Moments from Across Assam", "অসমজুৰি স্মৃতি")}</h1>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Select label={t("Year", "বছৰ")} value={year} onChange={setYear} options={YEARS} />
        <Select label={t("Region", "অঞ্চল")} value={region} onChange={setRegion} options={REGIONS} />
        <div className="ml-auto self-end text-sm text-muted-foreground">
          {filtered.length} {t("photos", "ফটো")}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p, i) => (
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
        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
            {t("No photos match these filters.", "এই ফিল্টাৰৰ বাবে ফটো নাই।")}
          </div>
        )}
      </div>

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

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-2xl border-2 border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground focus:border-gold focus:outline-none min-w-[180px]"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
