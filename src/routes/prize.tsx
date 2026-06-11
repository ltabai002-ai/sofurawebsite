import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Trophy, Medal, Award, Users, GraduationCap, ExternalLink } from "lucide-react";
import { useLang } from "@/components/LanguageContext";

export const Route = createFileRoute("/prize")({
  head: () => ({
    meta: [
      { title: "Prize Money — SOFURA Scholarship Examination" },
      { name: "description", content: "Complete prize money structure for the Sofura Talent Discovery & Scholarship Examination across all groups." },
    ],
  }),
  component: Prize,
});

const GROUPS = [
  { id: "abc", labelEn: "Groups A, B & C", labelAs: "গ্ৰুপ এ, বি আৰু চি", classes: "Class 2 – 7 / দ্বিতীয়ৰ পৰা সপ্তম শ্ৰেণী" },
  { id: "d", labelEn: "Group D", labelAs: "গ্ৰুপ ডি", classes: "Class 8 – 9 / অষ্টমৰ পৰা নৱম শ্ৰেণী" },
];

const TOP_PRIZES = [
  { rank: "1st", icon: "🏆", amount: 16000, labelEn: "First Prize", labelAs: "প্ৰথম পুৰস্কাৰ" },
  { rank: "2nd", icon: "🥈", amount: 14000, labelEn: "Second Prize", labelAs: "দ্বিতীয় পুৰস্কাৰ" },
  { rank: "3rd", icon: "🥉", amount: 12000, labelEn: "Third Prize", labelAs: "তৃতীয় পুৰস্কাৰ" },
  { rank: "4th", icon: "🎖️", amount: 11000, labelEn: "Fourth Prize", labelAs: "চতুৰ্থ পুৰস্কাৰ" },
  { rank: "5th", icon: "⭐", amount: 10000, labelEn: "Fifth Prize", labelAs: "পঞ্চম পুৰস্কাৰ" },
];

const CONSOLATION_ABC: { amount: number; students: number }[] = [
  { amount: 5000, students: 5 },
  { amount: 2000, students: 15 },
  { amount: 1000, students: 20 },
  { amount: 500, students: 175 },
  { amount: 300, students: 300 },
];

const CONSOLATION_D: { amount: number; students: number }[] = [
  { amount: 5000, students: 3 },
  { amount: 2000, students: 5 },
  { amount: 1000, students: 10 },
  { amount: 500, students: 100 },
  { amount: 300, students: 200 },
];

function Prize() {
  const { t } = useLang();
  const [activeGroup, setActiveGroup] = useState("abc");

  const isABC = activeGroup === "abc";
  const consolation = isABC ? CONSOLATION_ABC : CONSOLATION_D;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
          <Trophy className="h-4 w-4" /> {t("Prize Money", "পুৰস্কাৰৰ ধন")}
        </span>
        <h1 className="mt-2 font-serif text-5xl font-bold text-primary md:text-6xl">
          {t("Prize Money Structure", "পুৰস্কাৰৰ ধনৰ গঠন")}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          {t(
            "Complete prize breakdown for the Sofura Talent Discovery & Scholarship Examination across all groups.",
            "সকলো গ্ৰুপৰ বাবে সঁফুৰা প্ৰতিভা সন্ধান আৰু বৃত্তি পৰীক্ষাৰ সম্পূৰ্ণ পুৰস্কাৰ বিতৰণ।"
          )}
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="inline-flex rounded-full border-2 border-[#FFD93D]/40 bg-white p-1 shadow-sm">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`rounded-full px-6 py-2.5 font-play text-sm font-bold transition ${
                activeGroup === g.id
                  ? "bg-[#FFD93D] text-[#1A2A5E] shadow-sm"
                  : "text-gray-500 hover:text-[#1A2A5E]"
              }`}
            >
              {t(g.labelEn, g.labelAs)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-4 py-1.5">
          <Users className="h-4 w-4 text-[#FF9F45]" />
          <span className="font-play text-sm font-bold text-[#FF9F45]">
            {t(isABC ? "Classes 2 – 7" : "Classes 8 – 9", isABC ? "দ্বিতীয়ৰ পৰা সপ্তম শ্ৰেণী" : "অষ্টমৰ পৰা নৱম শ্ৰেণী")}
          </span>
        </span>
      </div>

      <div className="mt-12 space-y-14">
        <section>
          <div className="mb-6 flex items-center gap-3">
            <Medal className="h-6 w-6 text-[#FF9F45]" />
            <h2 className="font-play text-2xl font-bold text-[#1A2A5E]">
              {t("Top 5 Prizes", "শীৰ্ষ ৫ পুৰস্কাৰ")}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {TOP_PRIZES.map((p, i) => (
              <div
                key={p.rank}
                className={`card-tilt rounded-2xl p-6 text-center shadow-md border ${
                  i === 0
                    ? "bg-gradient-to-br from-[#FFD93D]/20 to-[#FF9F45]/10 border-[#FFD93D]/30"
                    : i === 1
                    ? "bg-gradient-to-br from-[#4ECDC4]/20 to-[#4ECDC4]/5 border-[#4ECDC4]/30"
                    : i === 2
                    ? "bg-gradient-to-br from-[#FF6B6B]/20 to-[#FF6B6B]/5 border-[#FF6B6B]/30"
                    : i === 3
                    ? "bg-gradient-to-br from-[#A855F7]/20 to-[#A855F7]/5 border-[#A855F7]/30"
                    : "bg-gradient-to-br from-[#3B82F6]/20 to-[#3B82F6]/5 border-[#3B82F6]/30"
                }`}
              >
                <span className="text-4xl block mb-2">{p.icon}</span>
                <h3 className="font-play text-lg font-bold text-[#1A2A5E]">
                  {t(p.labelEn, p.labelAs)}
                </h3>
                <p className={`mt-1 font-play text-2xl font-bold ${
                  i === 0 ? "text-[#FF9F45]" : i === 1 ? "text-[#4ECDC4]" : i === 2 ? "text-[#FF6B6B]" : i === 3 ? "text-[#A855F7]" : "text-[#3B82F6]"
                }`}>
                  ₹{p.amount.toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center gap-3">
            <Award className="h-6 w-6 text-[#FF9F45]" />
            <h2 className="font-play text-2xl font-bold text-[#1A2A5E]">
              {t("Consolation Prizes", "সান্ত্বনা পুৰস্কাৰ")}
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#1A2A5E] text-white">
                  <th className="px-6 py-4 font-play text-sm font-bold">
                    {t("Prize Amount", "পুৰস্কাৰৰ ধন")}
                  </th>
                  <th className="px-6 py-4 font-play text-sm font-bold">
                    {t("No. of Students", "শিক্ষাৰ্থীৰ সংখ্যা")}
                  </th>
                  <th className="px-6 py-4 font-play text-sm font-bold hidden sm:table-cell">
                    {t("Total Payout", "মুঠ পুৰস্কাৰ")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {consolation.map((row, i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-[#FFF8E7]" : "bg-white"}`}>
                    <td className="px-6 py-4">
                      <span className="font-play text-lg font-bold text-[#1A2A5E]">
                        ₹{row.amount.toLocaleString("en-IN")}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-body text-gray-700">{row.students}</span>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      <span className="font-body text-gray-500">
                        ₹{(row.amount * row.students).toLocaleString("en-IN")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center font-body text-sm text-gray-400">
            {t(
              "All prize amounts are per student. Terms and conditions apply.",
              "সকলো পুৰস্কাৰৰ ধন প্ৰতি শিক্ষাৰ্থীৰ বাবে। চৰ্তাৱলী প্ৰযোজ্য।"
            )}
          </p>
        </section>
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="https://forms.gle/FzyNUBfXyvaZJYHJ7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl bg-gold px-8 py-4 font-bold text-gold-foreground shadow-lg transition hover:opacity-90 hover:shadow-xl"
        >
          <GraduationCap className="h-6 w-6" />
          <span className="text-lg">{t("Register for the Examination", "পৰীক্ষাৰ বাবে পঞ্জীয়ন কৰক")}</span>
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
