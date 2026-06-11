import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Feather, Languages, MessageCircle, ChevronLeft, ChevronRight, Search, Check } from "lucide-react";
import { useState } from "react";
import magazineImg from "@/assets/magazine.webp";
import { useLang } from "@/components/LanguageContext";

export const Route = createFileRoute("/magazine")({
  head: () => ({
    meta: [
      { title: "Sofura Magazine — Assamese Children's Monthly Since 1982" },
      { name: "description", content: "Stories, poems and Phuloni translations from Assam's beloved children's monthly magazine." },
    ],
  }),
  component: Magazine,
});

const ARCHIVE_YEARS = Array.from(
  { length: new Date().getFullYear() - 2009 },
  (_, i) => String(2010 + i)
);

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function Magazine() {
  const { t } = useLang();
  const [selectedYear, setSelectedYear] = useState(ARCHIVE_YEARS[ARCHIVE_YEARS.length - 1]);
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/30 to-primary/20 blur-2xl" />
            <img src={magazineImg} alt="Sofura magazine cover" width={800} height={1024} loading="lazy" className="relative rounded-3xl shadow-[var(--shadow-elegant)] mx-auto max-w-md w-full" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t("Monthly · Since 1982", "মাহেকীয়া · ১৯৮২ৰে পৰা")}</span>
            <h1 className="mt-2 font-serif text-5xl font-bold text-primary md:text-6xl">{t("Sofura Magazine", "সঁফুৰা আলোচনী")}</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              {t(
                "An Assamese children's magazine that has made world literature, history and a wealth of facts accessible to children across Assam for over four decades.",
                "অসমীয়া শিশুসকলৰ বাবে বিশ্ব সাহিত্য, ইতিহাস আৰু জ্ঞানৰ ভঁৰাল মুকলি কৰি অহা চাৰি দশকৰো অধিক পুৰণি আলোচনী।"
              )}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Feature icon={<Feather />} label={t("Stories & Poems", "গল্প আৰু কবিতা")} color="gold" />
              <Feature icon={<Languages />} label={t("Phuloni Translations", "ফুলনি অনুবাদ")} color="teal" />
              <Feature icon={<BookOpen />} label={t("World Literature", "বিশ্ব সাহিত্য")} color="coral" />
              <Feature icon={<MessageCircle />} label={t("Reader Questions", "পাঠকৰ প্ৰশ্ন")} color="blue" />
            </div>
            <button className="mt-8 rounded-2xl bg-gold px-7 py-3.5 font-semibold text-gold-foreground hover:opacity-90 shadow-[var(--shadow-soft)]">
              {t("Subscribe Annually — ₹500", "বছৰি চাবস্ক্ৰাইব — ₹৫০০")}
            </button>
          </div>
        </div>
      </div>

      <MagazineArchive selectedYear={selectedYear} setSelectedYear={setSelectedYear} t={t} />
    </>
  );
}

function Feature({ icon, label, color }: { icon: React.ReactNode; label: string; color: "gold" | "teal" | "coral" | "blue" }) {
  const styles = {
    gold: { bg: "bg-[#FFD93D]/20", text: "text-[#FF9F45]", border: "border-[#FFD93D]/40", iconBg: "bg-[#FFD93D]/20", iconText: "text-[#FF9F45]" },
    teal: { bg: "bg-[#4ECDC4]/10", text: "text-[#4ECDC4]", border: "border-[#4ECDC4]/30", iconBg: "bg-[#4ECDC4]/20", iconText: "text-[#4ECDC4]" },
    coral: { bg: "bg-[#FF6B6B]/10", text: "text-[#FF6B6B]", border: "border-[#FF6B6B]/30", iconBg: "bg-[#FF6B6B]/20", iconText: "text-[#FF6B6B]" },
    blue: { bg: "bg-[#3B82F6]/10", text: "text-[#3B82F6]", border: "border-[#3B82F6]/30", iconBg: "bg-[#3B82F6]/20", iconText: "text-[#3B82F6]" },
  }[color];
  return (
    <div className={`flex items-center gap-3 rounded-2xl border ${styles.border} ${styles.bg} p-4 shadow-sm`}>
      <div className={`rounded-xl ${styles.iconBg} p-2 ${styles.iconText} [&_svg]:h-5 [&_svg]:w-5`}>{icon}</div>
      <span className={`font-medium text-sm ${styles.text}`}>{label}</span>
    </div>
  );
}

function MagazineArchive({ selectedYear, setSelectedYear, t }: { selectedYear: string; setSelectedYear: (y: string) => void; t: (en: string, as: string) => string }) {
  return (
    <section className="bg-[#FFF8E7] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FF9F45]">
            <BookOpen className="h-4 w-4" /> {t("Magazine Archive", "আলোচনী ভঁৰাল")}
          </span>
          <h2 className="font-play mt-4 text-4xl font-bold text-[#1A2A5E] md:text-5xl">
            {t("Browse Past Editions", "পুৰণি সংখ্যা চাওক")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-lg text-gray-600">
            {t("Explore our complete collection of monthly editions from 2010 to the present.", "২০১০ চনৰ পৰা বৰ্তমানলৈকে আমাৰ মাহিলী সংখ্যাৰ সম্পূৰ্ণ সংগ্ৰহ চাওক।")}
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <SearchableYearDropdown
            years={ARCHIVE_YEARS}
            selected={selectedYear}
            onSelect={setSelectedYear}
            t={t}
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {MONTHS.map((month, i) => (
            <MonthCard key={month} year={selectedYear} month={month} index={i + 1} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MonthCard({ year, month, index, t }: { year: string; month: string; index: number; t: (en: string, as: string) => string }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imgPath = `/magazine-covers/${year}/${String(index).padStart(2, "0")}.webp`;

  return (
    <div className="group relative rounded-2xl bg-white shadow-md border border-border/60 overflow-hidden transition hover:shadow-lg">
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#FFD93D]/10 to-[#FF9F45]/5">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <span className="text-5xl font-bold text-[#FFD93D]/30 select-none">
            {month.slice(0, 3).toUpperCase()}
          </span>
          <span className="mt-2 font-play text-base font-bold text-[#1A2A5E]">{month}</span>
          <div className="mt-3 rounded-full bg-[#FFD93D]/15 px-3 py-1">
            <span className="text-xs text-[#FF9F45]">+ {t("Add Cover", "কভাৰ যোগ কৰক")}</span>
          </div>
        </div>
        {!imgError && (
          <img
            src={imgPath}
            alt={`${month} ${year} cover`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
      </div>
      <div className="border-t border-border/60 px-3 py-2.5 text-center">
        <span className="font-play text-sm font-bold text-[#1A2A5E]">
          {month} {year}
        </span>
      </div>
    </div>
  );
}

function SearchableYearDropdown({ years, selected, onSelect, t }: { years: string[]; selected: string; onSelect: (y: string) => void; t: (en: string, as: string) => string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filtered = years.filter((y) => y.includes(query));

  return (
    <div className="relative w-full max-w-xs">
      <button
        onClick={() => { setOpen(!open); setQuery(""); }}
        className="flex w-full items-center justify-between gap-2 rounded-full bg-white border-2 border-[#FFD93D] px-5 py-3 font-play text-base font-bold text-[#1A2A5E] shadow-sm transition hover:border-[#FF9F45]"
      >
        <span>{t("Select Year", "বছৰ বাছক")}: {selected}</span>
        <ChevronLeft className={`h-4 w-4 text-[#FF9F45] transition ${open ? "-rotate-90" : "rotate-0"}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-2xl bg-white border-2 border-[#FFD93D]/30 shadow-lg overflow-hidden">
            <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("Search year...", "বছৰ সন্ধান কৰক...")}
                className="w-full bg-transparent font-body text-sm text-[#1A2A5E] outline-none placeholder:text-gray-400"
                autoFocus
              />
            </div>
            <div className="max-h-60 overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="px-4 py-8 text-center font-body text-sm text-gray-400">
                  {t("No years found", "কোনো বছৰ পোৱা নগ'ল")}
                </div>
              ) : (
                filtered.map((year) => (
                  <button
                    key={year}
                    onClick={() => { onSelect(year); setOpen(false); }}
                    className={`flex w-full items-center justify-between px-4 py-3 font-play text-sm transition hover:bg-[#FFF8E7] ${
                      year === selected ? "font-bold text-[#FF9F45]" : "text-[#1A2A5E]"
                    }`}
                  >
                    <span>{year}</span>
                    {year === selected && <Check className="h-4 w-4 text-[#FF9F45]" />}
                  </button>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
