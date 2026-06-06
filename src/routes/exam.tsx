import { createFileRoute } from "@tanstack/react-router";
import { Bell, Download, Trophy } from "lucide-react";
import { useLang } from "@/components/LanguageContext";

export const Route = createFileRoute("/exam")({
  head: () => ({
    meta: [
      { title: "Talent Discovery & Scholarship Exam — SOFURA" },
      { name: "description", content: "Statewide scholarship exam for classes 2 to 9 across Assam. Notices, admit cards and results." },
    ],
  }),
  component: Exam,
});

const NOTICES = [
  { date: "12 Mar 2025", en: "Admit Cards released for 2025-26 exam", as: "২০২৫-২৬ পৰীক্ষাৰ প্ৰৱেশপত্ৰ মুকলি" },
  { date: "01 Mar 2025", en: "Registration deadline extended to 20 March", as: "পঞ্জীয়নৰ অন্তিম তাৰিখ ২০ মাৰ্চলৈ বঢ়োৱা হ’ল" },
  { date: "15 Feb 2025", en: "Centre list published for all districts", as: "সকলো জিলাৰ কেন্দ্ৰ তালিকা প্ৰকাশ" },
  { date: "20 Jan 2025", en: "Final results 2024-25 published", as: "২০২৪-২৫ চূড়ান্ত ফলাফল প্ৰকাশ" },
];

const RESULTS = [
  ["II", "III", "IV"],
  ["V", "VI", "VII"],
  ["VIII", "IX"],
].flat();

function Exam() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="text-center">
        <Trophy className="mx-auto h-12 w-12 text-gold" />
        <h1 className="mt-3 font-serif text-5xl font-bold text-primary md:text-6xl">
          {t("Talent Discovery & Scholarship Exam", "প্ৰতিভা সন্ধান আৰু বৃত্তি পৰীক্ষা")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {t("Classes 2 to 9 · Conducted across Assam · Scholarships ₹500 – ₹20,000", "দ্বিতীয়ৰ পৰা নৱম শ্ৰেণী · অসমজুৰি · বৃত্তি ₹৫০০ – ₹২০,০০০")}
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_2fr]">
        {/* Notice Board */}
        <aside className="rounded-3xl border-2 border-gold/40 bg-card overflow-hidden shadow-[var(--shadow-soft)]">
          <div className="flex items-center gap-2 bg-gold px-5 py-3 text-gold-foreground">
            <Bell className="h-4 w-4" />
            <h2 className="font-serif text-lg font-bold">{t("Latest Updates", "শেহতীয়া বাৰ্তা")}</h2>
          </div>
          <ul className="divide-y divide-border">
            {NOTICES.map((n) => (
              <li key={n.date} className="px-5 py-4 hover:bg-secondary/50 transition cursor-pointer">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gold">{n.date}</div>
                <div className="mt-1 text-sm font-medium text-foreground">{t(n.en, n.as)}</div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Results Portal */}
        <section className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)]">
          <h2 className="font-serif text-3xl font-bold text-primary">{t("Results Portal · 2024-25", "ফলাফল পৰ্টাল · ২০২৪-২৫")}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{t("Download by class and medium of examination.", "শ্ৰেণী আৰু মাধ্যম অনুসৰি ডাউনলোড কৰক।")}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {RESULTS.map((cls) => (
              <div key={cls} className="rounded-2xl border border-border bg-secondary/40 p-4">
                <div className="flex items-baseline justify-between">
                  <div className="font-serif text-xl font-bold text-primary">{t(`Class ${cls}`, `শ্ৰেণী ${cls}`)}</div>
                  <div className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-bold text-primary">PDF</div>
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  <a href="#" className="flex items-center justify-between rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90">
                    {t("English Medium", "ইংৰাজী")} <Download className="h-3.5 w-3.5" />
                  </a>
                  <a href="#" className="flex items-center justify-between rounded-xl border border-primary/20 bg-card px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/5">
                    {t("Assamese Medium", "অসমীয়া")} <Download className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
