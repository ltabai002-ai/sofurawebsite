import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Trophy, BookOpen, Brain, Calculator, FlaskConical, Globe, Award, Heart, Rocket, Star, CheckCircle, ChevronDown, ExternalLink, Pen, Landmark, ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/components/LanguageContext";
import heroImg from "@/assets/Scholarshipwinners/prizedisimg.webp";
import achievementImg from "@/assets/achievement.webp";
import peguImg from "@/assets/Scholarshipwinners/pegudistribution.webp";

export const Route = createFileRoute("/exam")({
  head: () => ({
    meta: [
      { title: "Sofura Talent Discovery & Scholarship Examination — SOFURA" },
      { name: "description", content: "Statewide scholarship exam for classes 2 to 9 across Assam. Discover talent, earn recognition, shape your future." },
    ],
  }),
  component: ExamPage,
});

function Doodles({ count = 6, items, className = "" }: { count?: number; items?: string[]; className?: string }) {
  const doodles = items || ["⭐", "✨", "📚", "✏️", "🚀", "💛", "☁️", "💡", "✈️", "🌟", "💫", "🔬", "🎨", "🧮"];
  const positions = [
    { top: "10%", left: "8%" }, { top: "20%", right: "15%" }, { top: "50%", left: "5%" },
    { top: "70%", right: "8%" }, { top: "85%", left: "15%" }, { top: "35%", right: "5%" },
    { top: "15%", left: "30%" }, { top: "60%", right: "20%" },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden opacity-50 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="absolute text-lg animate-drift"
          style={{
            top: positions[i % positions.length].top,
            left: positions[i % positions.length].left,
            right: positions[i % positions.length].right,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${10 + i * 2}s`,
          }}
        >
          {doodles[i % doodles.length]}
        </span>
      ))}
    </div>
  );
}

const FAQ_DATA = [
  { q: "Who can apply?", en: "Students from Classes 2 to 9 studying in recognized schools across Assam are eligible. Both Assamese and English medium students can apply.", as: "অসমৰ স্বীকৃত বিদ্যালয়ত দ্বিতীয়ৰ পৰা নৱম শ্ৰেণীৰ শিক্ষাৰ্থীয়ে আবেদন কৰিব পাৰে। অসমীয়া আৰু ইংৰাজী দুয়োটা মাধ্যমৰ শিক্ষাৰ্থীয়ে অংশগ্ৰহণ কৰিব পাৰে।" },
  { q: "What subjects are included?", en: "The examination covers Mathematics, Science & Computer Science, English, General Knowledge, Social Sciences, and Mental Ability. Questions are designed to test conceptual understanding and analytical thinking.", as: "পৰীক্ষাত গণিত, বিজ্ঞান আৰু কম্পিউটাৰ বিজ্ঞান, ইংৰাজী, সাধাৰণ জ্ঞান, সমাজ বিজ্ঞান আৰু মানসিক যোগ্যতা অন্তৰ্ভুক্ত। প্ৰশ্নসমূহ ধাৰণাগত বুজাবুজি আৰু বিশ্লেষণাত্মক চিন্তা পৰীক্ষা কৰিবলৈ ডিজাইন কৰা হৈছে।" },
  { q: "How are scholarships awarded?", en: "Scholarships are awarded based on examination performance. Top-performing students receive scholarships ranging from ₹300 to ₹16,000 along with merit certificates.", as: "পৰীক্ষাৰ ফলাফলৰ ভিত্তিত বৃত্তি প্ৰদান কৰা হয়। শীৰ্ষ স্থানীয় শিক্ষাৰ্থীসকলে ₹৩০০ৰ পৰা ₹১৬,০০০ লৈকে বৃত্তি আৰু মেৰিট প্ৰমাণপত্ৰ লাভ কৰে।" },
  { q: "When will results be announced?", en: "Results are typically announced within 3–4 months after the examination. Notifications are published on this page and shared with participating schools.", as: "পৰীক্ষাৰ ৩–৪ মাহৰ ভিতৰত ফলাফল ঘোষণা কৰা হয়। এই পৃষ্ঠাত আৰু অংশগ্ৰহণকাৰী বিদ্যালয়সমূহত জাননী প্ৰকাশ কৰা হয়।" },
  { q: "How can I register?", en: "Registration is available online through this page. Students can also register through their respective schools. The registration form requires basic student details, class, and school information.", as: "এই পৃষ্ঠাৰ জৰিয়তে অনলাইন পঞ্জীয়ন উপলব্ধ। শিক্ষাৰ্থীয়ে নিজ নিজ বিদ্যালয়ৰ জৰিয়তেও পঞ্জীয়ন কৰিব পাৰে।" },
  { q: "Is the examination available for both Assamese and English medium students?", en: "Yes, the examination is conducted in both Assamese and English medium to ensure all students from across Assam can participate comfortably.", as: "হয়, পৰীক্ষা অসমীয়া আৰু ইংৰাজী দুয়োটা মাধ্যমত পৰিচালিত হয় যাতে অসমৰ সকলো শিক্ষাৰ্থীয়ে সুবিধামতে অংশগ্ৰহণ কৰিব পাৰে।" },
];

function ExamPage() {
  const { t } = useLang();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-[#FFF8E7]">
        <Doodles count={8} />
        <div className="mx-auto max-w-7xl px-4 pt-0 md:px-6 md:pt-0">
          <img src={heroImg} alt="Scholarship Winners" className="w-full rounded-[2rem] object-cover max-h-[500px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-16 md:px-6 md:pt-10 md:pb-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#FFD93D] bg-white px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2A5E] shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#FF9F45]" /> {t("Sofura Talent Discovery & Scholarship Examination", "সঁফুৰা প্ৰতিভা সন্ধান আৰু বৃত্তি পৰীক্ষা")}
              </span>
              <h1 className="font-play mt-5 text-5xl font-bold leading-[1.1] text-[#1A2A5E] md:text-6xl lg:text-7xl">
                {t("Compete.", "প্ৰতিদ্বন্দ্বিতা কৰা।")}
                <br />
                <span className="text-[#FF6B6B]">{t("Achieve.", "সাফল্য অৰ্জন কৰা।")}</span>
                <br />
                {t("Win Scholarships.", "বৃত্তি লাভ কৰা।")}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600 font-body">
                {t(
                  "Join thousands of students across Assam in the Sofura Talent Discovery & Scholarship Examination. Showcase your talent, earn statewide recognition, and compete for scholarships worth up to ₹16,000 while building confidence for future academic success.",
                  "অসমজুৰি হাজাৰ হাজাৰ শিক্ষাৰ্থীৰ সৈতে সঁফুৰা প্ৰতিভা সন্ধান আৰু বৃত্তি পৰীক্ষাত যোগদান কৰক। নিজৰ প্ৰতিভা প্ৰদৰ্শন কৰক, ৰাজ্যিক স্বীকৃতি লাভ কৰক, আৰু ভৱিষ্যতৰ শৈক্ষিক সফলতাৰ বাবে আত্মবিশ্বাস গঢ়ি তোলাৰ লগতে ₹১৬,০০০ লৈকে বৃত্তিৰ বাবে প্ৰতিদ্বন্দ্বিতা কৰক।"
                )}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-4 py-1.5">
                  <span className="font-play text-xs font-bold text-[#FF9F45]">✓ {t("Since 2004", "২০০৪ চনৰে পৰা")}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-4 py-1.5">
                  <span className="font-play text-xs font-bold text-[#FF9F45]">✓ {t("Classes 2–9", "দ্বিতীয়ৰ পৰা নৱম শ্ৰেণী")}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-4 py-1.5">
                  <span className="font-play text-xs font-bold text-[#FF9F45]">✓ {t("Assamese & English Medium", "অসমীয়া আৰু ইংৰাজী মাধ্যম")}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-4 py-1.5">
                  <span className="font-play text-xs font-bold text-[#FF9F45]">✓ {t("Across Assam", "অসমজুৰি")}</span>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://forms.gle/FzyNUBfXyvaZJYHJ7" target="_blank" rel="noopener noreferrer" className="btn-bounce inline-flex items-center gap-2 rounded-full bg-[#FF6B6B] px-8 py-4 font-play text-lg font-bold text-white shadow-coral transition hover:bg-[#ff5252]">
                  <Trophy className="h-5 w-5" /> {t("Apply Now", "এতিয়াই আবেদন কৰক")} <ExternalLink className="h-4 w-4" />
                </a>
                <Link to="/prize" className="btn-bounce inline-flex items-center gap-2 rounded-full border-2 border-[#FFD93D] bg-white px-8 py-4 font-play text-lg font-bold text-[#1A2A5E] transition hover:border-[#FF9F45] hover:bg-[#FFF8E7]">
                  🏆 {t("View Prize Details", "পুৰস্কাৰৰ ধন চাওক")}
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#FF9F45]">🏆 {t("Scholarships up to ₹16,000", "বৃত্তি ₹১৬,০০০ লৈকে")}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#FF9F45]">🎓 {t("Open for Classes 2–9", "শ্ৰেণী ২–৯ ৰ বাবে মুকলি")}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#FF9F45]">📍 {t("Conducted Across Assam", "অসমজুৰি পৰিচালিত")}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#FF9F45]">⭐ {t("Award Ceremony Graced by Dr. Ranoj Pegu, Hon'ble Education Minister of Assam", "ড০ ৰণোজ পেগু, অসমৰ মাননীয় শিক্ষামন্ত্ৰীৰ দ্বাৰা সন্মানিত")}</span>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#FFD93D]/40 via-[#FF6B6B]/20 to-[#4ECDC4]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-warm border-2 border-[#FFD93D]/30">
                <img src={achievementImg} alt="Achievement" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#EEF7FF]" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,35 C80,35 100,5 200,5 C300,5 320,35 400,35 C480,35 500,5 600,5 C700,5 720,35 800,35 C880,35 900,5 1000,5 C1100,5 1120,35 1200,35 L1200,40 L0,40 Z' fill='white'/%3E%3C/svg%3E\")", maskSize: "100% 100%", WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,35 C80,35 100,5 200,5 C300,5 320,35 400,35 C480,35 500,5 600,5 C700,5 720,35 800,35 C880,35 900,5 1000,5 C1100,5 1120,35 1200,35 L1200,40 L0,40 Z' fill='white'/%3E%3C/svg%3E\")", WebkitMaskSize: "100% 100%" }} />
      </section>

      {/* SECTION 2 — SPECIAL RECOGNITION */}
      <section className="relative overflow-hidden bg-[#1A2A5E]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-15" aria-hidden="true">
          <span className="absolute left-[8%] top-[15%] text-3xl animate-float" style={{ animationDelay: "0s" }}>🏆</span>
          <span className="absolute right-[12%] top-[20%] text-2xl animate-float" style={{ animationDelay: "1s" }}>🥇</span>
          <span className="absolute left-[5%] bottom-[25%] text-xl animate-float" style={{ animationDelay: "2s" }}>📜</span>
          <span className="absolute right-[8%] bottom-[30%] text-2xl animate-float" style={{ animationDelay: "0.5s" }}>⭐</span>
          <span className="absolute left-[20%] top-[60%] text-lg animate-twinkle">🎖</span>
          <span className="absolute right-[25%] top-[55%] text-lg animate-twinkle" style={{ animationDelay: "1.5s" }}>✨</span>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FFD93D]">
              <Award className="h-4 w-4" /> {t("Special Recognition", "বিশেষ স্বীকৃতি")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-white md:text-5xl">
              {t("Recognized. Rewarded. Celebrated.", "স্বীকৃত। পুৰস্কৃত। উদযাপিত।")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-body text-lg text-white/70">
              {t(
                "The Sofura Talent Discovery & Scholarship Examination not only discovers talent but also celebrates achievement through scholarships, certificates, and statewide recognition.",
                "সঁফুৰা প্ৰতিভা সন্ধান আৰু বৃত্তি পৰীক্ষাই কেৱল প্ৰতিভা আৱিষ্কাৰেই নকৰে, বৰং বৃত্তি, প্ৰমাণপত্ৰ আৰু ৰাজ্যিক স্বীকৃতিৰ জৰিয়তে সাফল্য উদযাপন কৰে।"
              )}
            </p>
          </div>
          <div className="mt-14 grid items-start gap-10 md:grid-cols-2">
            {/* LEFT — PRIZE CARDS */}
            <div>
              <div className="grid gap-3">
                {[
                  { rank: "1st", icon: "🏆", amount: 16000, color: "from-[#FFD93D]/20 to-[#FF9F45]/10 border-[#FFD93D]/30 text-[#FF9F45]", labelEn: "First Prize", labelAs: "প্ৰথম পুৰস্কাৰ" },
                  { rank: "2nd", icon: "🥈", amount: 14000, color: "from-[#4ECDC4]/20 to-[#4ECDC4]/5 border-[#4ECDC4]/30 text-[#4ECDC4]", labelEn: "Second Prize", labelAs: "দ্বিতীয় পুৰস্কাৰ" },
                  { rank: "3rd", icon: "🥉", amount: 12000, color: "from-[#FF6B6B]/20 to-[#FF6B6B]/5 border-[#FF6B6B]/30 text-[#FF6B6B]", labelEn: "Third Prize", labelAs: "তৃতীয় পুৰস্কাৰ" },
                  { rank: "4th", icon: "🎖️", amount: 11000, color: "from-[#A855F7]/20 to-[#A855F7]/5 border-[#A855F7]/30 text-[#A855F7]", labelEn: "Fourth Prize", labelAs: "চতুৰ্থ পুৰস্কাৰ" },
                  { rank: "5th", icon: "⭐", amount: 10000, color: "from-[#3B82F6]/20 to-[#3B82F6]/5 border-[#3B82F6]/30 text-[#3B82F6]", labelEn: "Fifth Prize", labelAs: "পঞ্চম পুৰস্কাৰ" },
                ].map((p) => (
                  <div key={p.rank} className={`card-tilt rounded-[2rem] bg-gradient-to-br ${p.color} p-5 shadow-sm`}>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{p.icon}</span>
                      <div>
                        <h3 className="font-play text-xl font-bold text-white">{t(p.labelEn, p.labelAs)}</h3>
                        <p className={`font-play text-lg font-bold ${p.color.split(" ").pop()}`}>
                          {t(`₹${p.amount.toLocaleString("en-IN")} Scholarship`, `₹${p.amount.toLocaleString("en-IN")} বৃত্তি`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/prize" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-6 py-3 font-play text-sm font-bold text-[#FFD93D] transition hover:bg-[#FFD93D]/30">
                {t("View Full Prize Details", "সম্পূৰ্ণ পুৰস্কাৰৰ ধন চাওক")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* RIGHT — IMAGE PLACEHOLDER & QUOTE */}
            <div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#FFD93D]/30 via-[#FF6B6B]/15 to-[#4ECDC4]/15 blur-2xl" />
                <div className="relative rounded-[2rem] bg-gradient-to-br from-[#FFF8E7]/10 to-[#FFD93D]/5 shadow-warm border border-[#FFD93D]/20 overflow-hidden">
                  <img src={peguImg} alt="Dr. Ranoj Pegu Award Distribution Ceremony" className="h-full w-full rounded-[2rem] object-cover" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-gradient-to-t from-black/70 via-black/40 to-transparent p-5 pt-12">
                    <p className="font-play text-lg font-bold text-white">
                      {t("Dr. Ranoj Pegu Award Distribution Ceremony", "ড০ ৰণোজ পেগু বিতৰণী অনুষ্ঠান")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border-l-4 border-[#FFD93D] bg-[#FFD93D]/10 p-5">
                <p className="font-body text-base leading-relaxed text-white/80 italic">
                  {t(
                    "Every year, outstanding performers are recognized and honoured during the Sofura Scholarship Award Ceremony, graced by Dr. Ranoj Pegu, Hon'ble Education Minister of Assam.",
                    "প্ৰতি বছৰে, বিশিষ্ট শিক্ষাৰ্থীসকলক সঁফুৰা বৃত্তি বিতৰণী অনুষ্ঠানত স্বীকৃতি আৰু সন্মান জনোৱা হয়, যি অনুষ্ঠান অসমৰ মাননীয় শিক্ষামন্ত্ৰী ড০ ৰণোজ পেগুৰ দ্বাৰা সন্মানিত।"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#EEF7FF]" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,35 C80,35 100,5 200,5 C300,5 320,35 400,35 C480,35 500,5 600,5 C700,5 720,35 800,35 C880,35 900,5 1000,5 C1100,5 1120,35 1200,35 L1200,40 L0,40 Z' fill='white'/%3E%3C/svg%3E\")", maskSize: "100% 100%", WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,35 C80,35 100,5 200,5 C300,5 320,35 400,35 C480,35 500,5 600,5 C700,5 720,35 800,35 C880,35 900,5 1000,5 C1100,5 1120,35 1200,35 L1200,40 L0,40 Z' fill='white'/%3E%3C/svg%3E\")", WebkitMaskSize: "100% 100%" }} />
      </section>

      {/* SECTION 3 — WHY THIS EXAM MATTERS */}
      <section className="relative overflow-hidden bg-[#EEF7FF]">
        <Doodles count={6} items={["💡", "⭐", "🌟", "✨", "📚", "🏆"]} />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4ECDC4]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#4ECDC4]">
              <Star className="h-4 w-4" /> {t("Why This Exam Matters", "এই পৰীক্ষাটো কিয় গুৰুত্বপূৰ্ণ")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-[#1A2A5E] md:text-5xl">
              {t("Every Child Has Potential", "প্ৰতিটো শিশুৰ মাজত আছে সম্ভাৱনা")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-body text-lg text-gray-600">
              {t("The right opportunity can turn talent into achievement.", "সঠিক সুযোগে প্ৰতিভাক সাফল্যত পৰিণত কৰিব পাৰে।")}
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Heart className="h-8 w-8" />, title: t("Academic Confidence", "শৈক্ষিক আত্মবিশ্বাস"), desc: t("Build self-belief through healthy competition.", "সুস্থ প্ৰতিযোগিতাৰ জৰিয়তে আত্মবিশ্বাস গঢ়ি তোলক।"), color: "from-rose-100 to-rose-50", iconBg: "bg-rose-200/60", iconColor: "text-rose-500" },
              { icon: <Award className="h-8 w-8" />, title: t("Talent Recognition", "প্ৰতিভা চিনাক্তকৰণ"), desc: t("Identify strengths and celebrate achievement.", "শক্তি চিনাক্ত কৰক আৰু সাফল্য উদযাপন কৰক।"), color: "from-amber-100 to-amber-50", iconBg: "bg-amber-200/60", iconColor: "text-amber-500" },
              { icon: <Trophy className="h-8 w-8" />, title: t("Scholarship Opportunities", "বৃত্তিৰ সুযোগ"), desc: t("Reward hard work and academic excellence.", "কঠোৰ পৰিশ্ৰম আৰু শৈক্ষিক উৎকৰ্ষতাক পুৰস্কৃত কৰক।"), color: "from-blue-100 to-blue-50", iconBg: "bg-blue-200/60", iconColor: "text-blue-500" },
              { icon: <Rocket className="h-8 w-8" />, title: t("Future Readiness", "ভৱিষ্যতৰ বাবে প্ৰস্তুতি"), desc: t("Prepare students for future competitive examinations.", "ভৱিষ্যতৰ প্ৰতিযোগিতামূলক পৰীক্ষাৰ বাবে শিক্ষাৰ্থী প্ৰস্তুত কৰক।"), color: "from-emerald-100 to-emerald-50", iconBg: "bg-emerald-200/60", iconColor: "text-emerald-500" },
            ].map((card, i) => (
              <div key={i} className={`card-tilt rounded-[2rem] bg-gradient-to-br ${card.color} p-6 shadow-md md:p-8`}>
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.iconBg} ${card.iconColor} shadow-sm mb-5`}>
                  {card.icon}
                </div>
                <h3 className="font-play text-xl font-bold text-[#1A2A5E]">{card.title}</h3>
                <p className="mt-2 font-body text-sm text-gray-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE CHALLENGE */}
      <section className="relative overflow-hidden bg-[#FFF8E7]">
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#1A2A5E]" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,35 C80,35 100,5 200,5 C300,5 320,35 400,35 C480,35 500,5 600,5 C700,5 720,35 800,35 C880,35 900,5 1000,5 C1100,5 1120,35 1200,35 L1200,40 L0,40 Z' fill='white'/%3E%3C/svg%3E\")", maskSize: "100% 100%", WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,35 C80,35 100,5 200,5 C300,5 320,35 400,35 C480,35 500,5 600,5 C700,5 720,35 800,35 C880,35 900,5 1000,5 C1100,5 1120,35 1200,35 L1200,40 L0,40 Z' fill='white'/%3E%3C/svg%3E\")", WebkitMaskSize: "100% 100%" }} />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FF6B6B]/15 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FF6B6B]">
              <Sparkles className="h-4 w-4" /> {t("The Challenge", "প্ৰত্যাহ্বান")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-[#1A2A5E] md:text-5xl">
              {t("Many Talented Students Never Get The Opportunity To Shine", "অনেক প্ৰতিভাৱান শিক্ষাৰ্থীয়ে কেতিয়াও উজ্জ্বল হোৱাৰ সুযোগ নাপায়")}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🔍", title: t("Hidden Talent", "লুকাই থকা প্ৰতিভা"), desc: t("Many students never receive recognition.", "অনেক শিক্ষাৰ্থীয়ে কেতিয়াও স্বীকৃতি নাপায়।") },
              { icon: "🌍", title: t("Limited Exposure", "সীমিত পৰিচয়"), desc: t("Students lack platforms to showcase their abilities.", "শিক্ষাৰ্থীসকলৰ নিজৰ দক্ষতা প্ৰদৰ্শন কৰিবলৈ মঞ্চ নাই।") },
              { icon: "💭", title: t("Lack Of Motivation", "প্ৰেৰণাৰ অভাৱ"), desc: t("Potential often remains unexplored.", "সম্ভাৱনা প্ৰায়ে অনাবিষ্কৃত থাকে।") },
              { icon: "🚫", title: t("Missed Opportunities", "সুযোগ হেৰুওৱা"), desc: t("Talent goes unnoticed without encouragement.", "উৎসাহ অবিহনে প্ৰতিভা অপ্ৰত্যক্ষিত থাকে।") },
            ].map((card, i) => (
              <div key={i} className="card-tilt rounded-[2rem] bg-white border-2 border-[#FFD93D]/20 p-6 shadow-md md:p-8">
                <span className="text-5xl block mb-4">{card.icon}</span>
                <h3 className="font-play text-xl font-bold text-[#1A2A5E]">{card.title}</h3>
                <p className="mt-2 font-body text-sm text-gray-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FROM POTENTIAL TO ACHIEVEMENT */}
      <section className="relative overflow-hidden bg-[#1A2A5E]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
          <span className="absolute left-[10%] top-[15%] text-xl animate-float" style={{ animationDelay: "0s" }}>⭐</span>
          <span className="absolute right-[12%] top-[30%] text-sm animate-twinkle" style={{ animationDelay: "0.6s" }}>✧</span>
          <span className="absolute left-[30%] top-[70%] text-base animate-twinkle" style={{ animationDelay: "1.2s" }}>✦</span>
          <span className="absolute right-[25%] bottom-[20%] text-lg animate-twinkle" style={{ animationDelay: "0.3s" }}>✧</span>
          <span className="absolute left-[60%] top-[15%] text-sm animate-twinkle" style={{ animationDelay: "0.9s" }}>✦</span>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FFD93D]">
              <Rocket className="h-4 w-4" /> {t("The Journey", "যাত্ৰা")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-white md:text-5xl">
              {t("What Participation Can Unlock", "অংশগ্ৰহণে কি আনি দিব পাৰে")}
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-5 items-start gap-4">
            {[
              { icon: "🔍", text: t("Discover Talent", "প্ৰতিভা আৱিষ্কাৰ") },
              { icon: "📝", text: t("Test Knowledge", "জ্ঞান পৰীক্ষা") },
              { icon: "💪", text: t("Build Confidence", "আত্মবিশ্বাস গঢ়ি তোলা") },
              { icon: "🏆", text: t("Earn Recognition", "স্বীকৃতি লাভ") },
              { icon: "🎓", text: t("Receive Scholarships", "বৃত্তি লাভ") },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD93D] shadow-warm">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <span className="mt-2 font-play text-lg font-bold text-white">{step.text}</span>
                {i < 4 && <span className="mt-3 text-2xl text-[#FFD93D]/50">→</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#FFF8E7]" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,0 L0,20 C300,0 600,40 900,20 C1050,30 1200,20 1200,20 L1200,0 Z' fill='white'/%3E%3C/svg%3E\")", maskSize: "100% 100%", WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,0 L0,20 C300,0 600,40 900,20 C1050,30 1200,20 1200,20 L1200,0 Z' fill='white'/%3E%3C/svg%3E\")", WebkitMaskSize: "100% 100%" }} />
      </section>

      {/* SECTION 5 — WHO CAN PARTICIPATE */}
      <section className="relative overflow-hidden bg-[#FFF8E7]">
        <Doodles count={6} items={["👦", "👧", "🧑", "🌟", "📚", "✏️"]} />
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FF9F45]/15 px-4 py-1 font-play text-xs font-bold uppercase tracking-wider text-[#FF9F45]">
              <Star className="h-4 w-4" /> {t("Eligibility", "যোগ্যতা")}
            </span>
            <h2 className="font-play mt-2 text-2xl font-bold text-[#1A2A5E] md:text-3xl">
              {t("Open To Students Across Assam", "অসমৰ সকলো শিক্ষাৰ্থীৰ বাবে মুকলি")}
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { group: "A", groupAs: "ক", classes: "II – III", emoji: "🧒", color: "border-[#FFD93D]/40 bg-[#FFD93D]/10", textColor: "text-[#FF9F45]", desc: t("Classes 2 & 3", "২ আৰু ৩ শ্ৰেণী") },
              { group: "B", groupAs: "খ", classes: "IV – V", emoji: "👧", color: "border-[#4ECDC4]/40 bg-[#4ECDC4]/10", textColor: "text-[#4ECDC4]", desc: t("Classes 4 & 5", "৪ আৰু ৫ শ্ৰেণী") },
              { group: "C", groupAs: "গ", classes: "VI – VII", emoji: "🧑", color: "border-[#FF6B6B]/40 bg-[#FF6B6B]/10", textColor: "text-[#FF6B6B]", desc: t("Classes 6 & 7", "৬ আৰু ৭ শ্ৰেণী") },
              { group: "D", groupAs: "ঘ", classes: "VIII – IX", emoji: "🌟", color: "border-[#A855F7]/40 bg-[#A855F7]/10", textColor: "text-[#A855F7]", desc: t("Classes 8 & 9", "৮ আৰু ৯ শ্ৰেণী") },
            ].map((g) => (
              <div key={g.group} className={`rounded-2xl border-2 ${g.color} bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md`}>
                <span className="text-3xl">{g.emoji}</span>
                <div className="mt-2">
                  <span className={`font-play text-lg font-bold ${g.textColor}`}>{t("Group", "গোট")} {g.group} ({g.groupAs})</span>
                </div>
                <div className="mt-1 font-play text-sm font-bold text-[#1A2A5E]">{g.classes}</div>
                <div className="mt-1 text-xs text-gray-500">{g.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="font-play text-xs font-bold text-[#1A2A5E]/60 uppercase tracking-wider">{t("Available In", "উপলব্ধ")}:</span>
            <div className="flex items-center gap-1.5 rounded-full bg-[#FFD93D]/20 px-4 py-1.5">
              <span className="font-play text-xs font-bold text-[#1A2A5E]">📖 {t("Assamese", "অসমীয়া")}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-[#4ECDC4]/20 px-4 py-1.5">
              <span className="font-play text-xs font-bold text-[#1A2A5E]">📖 {t("English", "ইংৰাজী")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SUBJECTS COVERED */}
      <section className="relative overflow-hidden bg-[#EEF7FF]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <span className="absolute left-[5%] top-[10%] text-2xl animate-float" style={{ animationDelay: "0s" }}>🧮</span>
          <span className="absolute right-[8%] top-[20%] text-xl animate-float" style={{ animationDelay: "0.7s" }}>🔬</span>
          <span className="absolute left-[3%] bottom-[15%] text-xl animate-float" style={{ animationDelay: "1.4s" }}>🌍</span>
          <span className="absolute right-[5%] bottom-[25%] text-lg animate-float" style={{ animationDelay: "0.4s" }}>🧠</span>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4ECDC4]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#4ECDC4]">
              <BookOpen className="h-4 w-4" /> {t("Subjects", "বিষয়সমূহ")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-[#1A2A5E] md:text-5xl">
              {t("Worlds To Explore", "অন্বেষণ কৰিবলৈ জগত")}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Calculator className="h-8 w-8" />, title: t("Mathematics", "গণিত"), desc: t("Numbers, patterns and logical thinking.", "সংখ্যা, নক্সা আৰু যুক্তিসংগত চিন্তা।"), color: "from-blue-100 to-blue-50", iconBg: "bg-blue-400", iconColor: "text-white" },
              { icon: <FlaskConical className="h-8 w-8" />, title: t("Science & Computer Science", "বিজ্ঞান আৰু কম্পিউটাৰ বিজ্ঞান"), desc: t("Experiments, nature, computing and discovery.", "পৰীক্ষা, প্ৰকৃতি, কম্পিউটিং আৰু আৱিষ্কাৰ।"), color: "from-emerald-100 to-emerald-50", iconBg: "bg-emerald-400", iconColor: "text-white" },
              { icon: <Globe className="h-8 w-8" />, title: t("General Knowledge", "সাধাৰণ জ্ঞান"), desc: t("Understanding the world around us.", "আমাৰ চাৰিওকাষৰ পৃথিৱী বুজা।"), color: "from-amber-100 to-amber-50", iconBg: "bg-amber-400", iconColor: "text-white" },
              { icon: <Brain className="h-8 w-8" />, title: t("Mental Ability", "মানসিক যোগ্যতা"), desc: t("Reasoning, logic and problem solving.", "যুক্তি, বিচাৰ আৰু সমস্যা সমাধান।"), color: "from-rose-100 to-rose-50", iconBg: "bg-rose-400", iconColor: "text-white" },
              { icon: <Pen className="h-8 w-8" />, title: t("English", "ইংৰাজী"), desc: t("Language, comprehension and expression.", "ভাষা, বুজাবুজি আৰু প্ৰকাশ।"), color: "from-indigo-100 to-indigo-50", iconBg: "bg-indigo-400", iconColor: "text-white" },
              { icon: <Landmark className="h-8 w-8" />, title: t("Social Sciences", "সমাজ বিজ্ঞান"), desc: t("History, geography and civic awareness.", "ইতিহাস, ভূগোল আৰু নাগৰিক সচেতনতা।"), color: "from-cyan-100 to-cyan-50", iconBg: "bg-cyan-400", iconColor: "text-white" },
            ].map((card, i) => (
              <div key={i} className={`card-tilt rounded-[2rem] bg-gradient-to-br ${card.color} p-6 shadow-md md:p-8`}>
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.iconBg} ${card.iconColor} shadow-sm mb-5`}>
                  {card.icon}
                </div>
                <h3 className="font-play text-xl font-bold text-[#1A2A5E]">{card.title}</h3>
                <p className="mt-2 font-body text-sm text-gray-500">{card.desc}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 font-play text-sm font-bold text-gray-400 transition group-hover:gap-2">
                    {t("Explore", "অন্বেষণ")} <span className="inline-block">→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — HOW THE EXAM WORKS */}
      <section className="relative overflow-hidden bg-[#FFF8E7]">
        <Doodles count={6} items={["📝", "✅", "📋", "📊", "📢", "🎓"]} />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FF9F45]">
              <Rocket className="h-4 w-4" /> {t("Process", "পদ্ধতি")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-[#1A2A5E] md:text-5xl">
              {t("Your Scholarship Journey", "তোমাৰ বৃত্তি যাত্ৰা")}
            </h2>
          </div>
          <div className="mt-14 flex flex-col items-center gap-2 md:gap-3">
            {[
              { icon: "📝", text: t("Register", "পঞ্জীয়ন") },
              { icon: "🪪", text: t("Receive Admit Card", "প্ৰৱেশপত্ৰ লাভ") },
              { icon: "✍️", text: t("Appear For Examination", "পৰীক্ষাত বহা") },
              { icon: "📊", text: t("Evaluation", "মূল্যায়ন") },
              { icon: "📢", text: t("Results", "ফলাফল") },
              { icon: "🏆", text: t("Scholarship Awards", "বৃত্তি পুৰস্কাৰ") },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD93D] to-[#FF9F45] shadow-warm">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <span className="mt-2 font-play text-lg font-bold text-[#1A2A5E]">{step.text}</span>
                {i < 5 && <span className="my-1 text-2xl text-[#FFD93D]">↓</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#1A2A5E]" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,35 C80,35 100,5 200,5 C300,5 320,35 400,35 C480,35 500,5 600,5 C700,5 720,35 800,35 C880,35 900,5 1000,5 C1100,5 1120,35 1200,35 L1200,40 L0,40 Z' fill='white'/%3E%3C/svg%3E\")", maskSize: "100% 100%", WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,35 C80,35 100,5 200,5 C300,5 320,35 400,35 C480,35 500,5 600,5 C700,5 720,35 800,35 C880,35 900,5 1000,5 C1100,5 1120,35 1200,35 L1200,40 L0,40 Z' fill='white'/%3E%3C/svg%3E\")", WebkitMaskSize: "100% 100%" }} />
      </section>

      {/* SECTION 8 — ABOUT THE EXAMINATION */}
      <section className="relative overflow-hidden bg-[#1A2A5E]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-15" aria-hidden="true">
          <span className="absolute left-[5%] top-[20%] text-3xl animate-float" style={{ animationDelay: "0s" }}>📖</span>
          <span className="absolute right-[10%] top-[15%] text-2xl animate-float" style={{ animationDelay: "1s" }}>⭐</span>
          <span className="absolute left-[15%] bottom-[20%] text-xl animate-float" style={{ animationDelay: "2s" }}>✨</span>
          <span className="absolute right-[8%] bottom-[25%] text-xl animate-float" style={{ animationDelay: "0.5s" }}>📚</span>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FFD93D]">
                <BookOpen className="h-4 w-4" /> {t("About The Examination", "পৰীক্ষাৰ বিষয়ে")}
              </span>
              <h2 className="font-play mt-4 text-4xl font-bold text-white md:text-5xl">
                {t("A Tradition Of Discovering Talent Since 2004", "২০০৪ চনৰে পৰা প্ৰতিভা আৱিষ্কাৰৰ পৰম্পৰা")}
              </h2>
              <p className="mt-5 font-body text-lg leading-relaxed text-white/80">
                {t(
                  "The Sofura Talent Discovery & Scholarship Examination was launched in 2004 by the SOFURA Educational Trust. Conducted annually across Assam, the examination identifies talented students and encourages academic excellence through healthy competition and scholarship opportunities.",
                  "২০০৪ চনত সঁফুৰা শিক্ষা ন্যাসৰ দ্বাৰা সঁফুৰা প্ৰতিভা সন্ধান আৰু বৃত্তি পৰীক্ষা আৰম্ভ কৰা হৈছিল। অসমজুৰি বাৰ্ষিকভাৱে পৰিচালিত এই পৰীক্ষাই প্ৰতিভাৱান শিক্ষাৰ্থীক চিনাক্ত কৰে আৰু সুস্থ প্ৰতিযোগিতা আৰু বৃত্তিৰ সুযোগৰ জৰিয়তে শৈক্ষিক উৎকৰ্ষতাক উৎসাহিত কৰে।"
                )}
              </p>
              <p className="mt-4 font-body text-lg leading-relaxed text-white/70">
                {t(
                  "Students are assessed in Mathematics, Science & Computer Science, English, General Knowledge, Social Sciences, and Mental Ability — helping them develop analytical thinking, problem-solving skills, and confidence for future competitive examinations.",
                  "গণিত, বিজ্ঞান আৰু কম্পিউটাৰ বিজ্ঞান, ইংৰাজী, সাধাৰণ জ্ঞান, সমাজ বিজ্ঞান আৰু মানসিক যোগ্যতাৰ ক্ষেত্ৰত শিক্ষাৰ্থীসকলৰ মূল্যায়ন কৰা হয় — যাৰ ফলত তেওঁলোকৰ বিশ্লেষণাত্মক চিন্তা, সমস্যা সমাধানৰ দক্ষতা আৰু ভৱিষ্যতৰ প্ৰতিযোগিতামূলক পৰীক্ষাৰ বাবে আত্মবিশ্বাস বিকশিত হয়।"
                )}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5">
                  <ClipboardCheck className="h-3.5 w-3.5 text-[#4ECDC4]" />
                  <span className="font-play text-xs font-bold text-white">{t("150 Questions", "১৫০ প্ৰশ্ন")}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5">
                  <span className="font-play text-xs text-[#FFD93D]">✍️</span>
                  <span className="font-play text-xs font-bold text-white">{t("MCQ Format", "MCQ বিন্যাস")}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5">
                  <span className="font-play text-xs text-[#FF9F45]">📄</span>
                  <span className="font-play text-xs font-bold text-white">{t("OMR Answer Sheet", "OMR উত্তৰ পত্ৰ")}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5">
                  <span className="font-play text-xs text-[#FF6B6B]">🖊️</span>
                  <span className="font-play text-xs font-bold text-white">{t("Pen Only", "কেৱল কলম")}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5">
                  <span className="font-play text-xs text-[#4ECDC4]">🔄</span>
                  <span className="font-play text-xs font-bold text-white">{t("Annual — Multiple Attempts Allowed", "বাৰ্ষিক — একাধিকবাৰ বহিব পাৰি")}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5">
                  <span className="font-play text-xs text-[#A855F7]">📘</span>
                  <span className="font-play text-xs font-bold text-white">{t("Study Material Available", "অধ্যয়ন সামগ্ৰী উপলব্ধ")}</span>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 md:p-6">
                <h3 className="font-play text-base font-bold text-[#FFD93D] mb-4 text-center">{t("Quick Facts", "সংক্ষিপ্ত তথ্য")}</h3>
                <div className="space-y-2.5">
                  {[
                    { label: t("Exam Name", "পৰীক্ষাৰ নাম"), value: t("SOFURA Talent Discovery Examination", "সঁফুৰা প্ৰতিভা সন্ধান পৰীক্ষা") },
                    { label: t("Conducted By", "পৰিচালনা কৰে"), value: t("SOFURA Educational Trust", "সঁফুৰা শিক্ষা ন্যাস") },
                    { label: t("Classes Eligible", "যোগ্য শ্ৰেণী"), value: "II – IX" },
                    { label: t("Total Questions", "মুঠ প্ৰশ্ন"), value: "150" },
                    { label: t("Exam Type", "পৰীক্ষাৰ ধৰণ"), value: t("Objective (MCQ)", "বস্তুনিষ্ঠ (MCQ)") },
                    { label: t("Answer Mode", "উত্তৰ দিয়াৰ ধৰণ"), value: t("OMR Sheet", "OMR পত্ৰ") },
                    { label: t("Scholarship Range", "বৃত্তিৰ পৰিসৰ"), value: "₹300 – ₹16,000" },
                    { label: t("Certificate", "প্ৰমাণপত্ৰ"), value: t("60% Aggregate", "৬০% গড় নম্বৰ") },
                    { label: t("Frequency", "পৰ্যায়"), value: t("Annual", "বাৰ্ষিক") },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 border-b border-white/10 pb-2 last:border-0 last:pb-0">
                      <span className="font-play text-xs font-bold text-white/60">{row.label}</span>
                      <span className="font-play text-xs font-bold text-white text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — SCHOLARSHIPS & RECOGNITION */}
      <section className="relative overflow-hidden bg-[#FFF8E7]">
        <Doodles count={6} items={["🏆", "📜", "⭐", "🎓", "💛", "🌟"]} />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FF9F45]">
              <Award className="h-4 w-4" /> {t("Rewards", "পুৰস্কাৰ")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-[#1A2A5E] md:text-5xl">
              {t("Rewards That Inspire Excellence", "পুৰস্কাৰ যিয়ে উৎকৰ্ষক প্ৰেৰণা যোগায়")}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🏆", title: t("Scholarship Awards", "বৃত্তি পুৰস্কাৰ"), desc: t("Financial support for top-performing students.", "শীৰ্ষ স্থানীয় শিক্ষাৰ্থীসকলৰ বাবে আৰ্থিক সহায়।") },
              { icon: "📜", title: t("Merit Certificates", "মেৰিট প্ৰমাণপত্ৰ"), desc: t("Official recognition of academic achievement.", "শৈক্ষিক সাফল্যৰ চৰকাৰী স্বীকৃতি।") },
              { icon: "🎓", title: t("Academic Recognition", "শৈক্ষিক স্বীকৃতি"), desc: t("Celebrated in schools and communities.", "বিদ্যালয় আৰু সমাজত উদযাপিত।") },
              { icon: "🌟", title: t("Statewide Achievement", "ৰাজ্যিক সাফল্য"), desc: t("Join the ranks of Assam's brightest students.", "অসমৰ উজ্জ্বল শিক্ষাৰ্থীৰ শাৰীত যোগ দিয়ক।") },
            ].map((card, i) => (
              <div key={i} className="card-tilt rounded-[2rem] bg-white border-2 border-[#FFD93D]/20 p-6 shadow-md text-center md:p-8">
                <span className="text-6xl block mb-4">{card.icon}</span>
                <h3 className="font-play text-xl font-bold text-[#1A2A5E]">{card.title}</h3>
                <p className="mt-2 font-body text-sm text-gray-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — IMPACT ACROSS ASSAM */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFD93D] via-[#FF9F45] to-[#FF6B6B]">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute left-[10%] top-[20%] text-5xl animate-float" style={{ animationDelay: "0s" }}>🌟</div>
          <div className="absolute right-[15%] top-[15%] text-4xl animate-float" style={{ animationDelay: "1s" }}>📚</div>
          <div className="absolute left-[20%] bottom-[20%] text-4xl animate-float" style={{ animationDelay: "0.5s" }}>⭐</div>
          <div className="absolute right-[10%] bottom-[30%] text-4xl animate-float" style={{ animationDelay: "1.5s" }}>🏆</div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            <Globe className="h-4 w-4" /> {t("Impact", "প্ৰভাৱ")}
          </span>
          <h2 className="font-play mt-4 text-4xl font-bold text-white md:text-5xl">
            {t("Discovering Talent Across Assam", "অসমজুৰি প্ৰতিভা আৱিষ্কাৰ")}
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "20+", label: t("Years Of Impact", "প্ৰভাৱৰ বছৰ") },
              { number: "50,000+", label: t("Participating Students", "অংশগ্ৰহণকাৰী শিক্ষাৰ্থী") },
              { number: "200+", label: t("Examination Centres", "পৰীক্ষা কেন্দ্ৰ") },
              { number: "5,000+", label: t("Scholarship Winners", "বৃত্তি বিজয়ী") },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl bg-white/15 backdrop-blur-sm p-6">
                <div className="font-play text-5xl font-bold text-white">{stat.number}</div>
                <div className="mt-2 font-play text-sm font-bold text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — WHY PARENTS TRUST SOFURA */}
      <section className="relative overflow-hidden bg-[#EEF7FF]">
        <Doodles count={6} items={["💛", "⭐", "🤝", "📚", "🏡", "🌱"]} />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FF9F45]">
              <Heart className="h-4 w-4" /> {t("Trust", "বিশ্বাস")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-[#1A2A5E] md:text-5xl">
              {t("Backed By A Legacy Of Educational Excellence", "শৈক্ষিক উৎকৰ্ষতাৰ ঐতিহ্যৰ দ্বাৰা সমৰ্থিত")}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { year: t("Founded In 1982", "১৯৮২ চনত প্ৰতিষ্ঠিত"), desc: t("One of Assam's most respected children's educational initiatives.", "অসমৰ সৰ্বাধিক সন্মানিত শিশু শিক্ষামূলক উদ্যোগসমূহৰ ভিতৰত অন্যতম।") },
              { year: t("Scholarship Exam Since 2004", "২০০৪ চনৰে পৰা বৃত্তি পৰীক্ষা"), desc: t("Supporting young talent for over two decades.", "দুই দশকৰো অধিক সময় ধৰি যুৱ প্ৰতিভাক সমৰ্থন কৰি আহিছে।") },
              { year: t("Educational Mission", "শিক্ষামূলক লক্ষ্য"), desc: t("Focused on learning, creativity and growth.", "শিক্ষা, সৃষ্টিশীলতা আৰু বিকাশৰ ওপৰত গুৰুত্ব আৰোপ কৰা।") },
              { year: t("Statewide Reach", "ৰাজ্যিক ব্যাপ্তি"), desc: t("Students participate from across Assam.", "অসমৰ বিভিন্ন প্ৰান্তৰ শিক্ষাৰ্থীয়ে অংশগ্ৰহণ কৰে।") },
            ].map((card, i) => (
              <div key={i} className="card-tilt rounded-[2rem] bg-white border-2 border-[#FFD93D]/20 p-6 shadow-md md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD93D] text-xl mb-4">✓</div>
                <h3 className="font-play text-xl font-bold text-[#1A2A5E]">{card.year}</h3>
                <p className="mt-2 font-body text-sm text-gray-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — IMPORTANT DATES */}
      <section className="relative overflow-hidden bg-[#FFF8E7]">
        <Doodles count={6} items={["📅", "⏰", "📌", "🗓️", "⭐", "✨"]} />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FF9F45]">
              <Sparkles className="h-4 w-4" /> {t("Schedule", "সময়সূচী")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-[#1A2A5E] md:text-5xl">
              {t("Important Examination Dates", "গুৰুত্বপূৰ্ণ পৰীক্ষাৰ তাৰিখ")}
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              { label: t("Registration Opens", "পঞ্জীয়ন আৰম্ভ"), date: "TBD" },
              { label: t("Registration Closes", "পঞ্জীয়ন শেষ"), date: "TBD" },
              { label: t("Examination Date", "পৰীক্ষাৰ তাৰিখ"), date: "TBD" },
              { label: t("Results Announcement", "ফলাফল ঘোষণা"), date: "TBD" },
              { label: t("Scholarship Distribution", "বৃত্তি বিতৰণ"), date: "TBD" },
            ].map((item, i) => (
              <div key={i} className="card-tilt rounded-2xl bg-white border-2 border-[#FFD93D]/20 p-5 text-center shadow-sm">
                <div className="font-play text-xs font-bold uppercase tracking-wider text-[#FF9F45]">{item.label}</div>
                <div className="mt-2 font-play text-2xl font-bold text-[#1A2A5E]">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — FAQ */}
      <section className="relative overflow-hidden bg-[#EEF7FF]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30" aria-hidden="true">
          <span className="absolute left-[5%] top-[10%] text-xl animate-float">❓</span>
          <span className="absolute right-[8%] top-[20%] text-lg animate-float" style={{ animationDelay: "1s" }}>💡</span>
          <span className="absolute left-[3%] bottom-[15%] text-xl animate-float" style={{ animationDelay: "2s" }}>❓</span>
        </div>
        <div className="mx-auto max-w-4xl px-4 py-20 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4ECDC4]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#4ECDC4]">
              <Sparkles className="h-4 w-4" /> {t("FAQ", "সাধাৰণ প্ৰশ্ন")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-[#1A2A5E] md:text-5xl">
              {t("Frequently Asked Questions", "সঘনাই সোধা প্ৰশ্ন")}
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <div key={i} className="rounded-2xl border-2 border-[#FFD93D]/20 bg-white overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-play text-base font-bold text-[#1A2A5E] transition hover:bg-[#FFF8E7]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[#FF9F45] transition-transform duration-300 ${openFAQ === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="border-t border-[#FFD93D]/10 px-6 py-4 font-body text-sm text-gray-600 leading-relaxed">
                    {t(faq.en, faq.as)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-br from-[#FFD93D] via-[#FF9F45] to-[#FF6B6B]" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,0 L0,20 C300,0 600,40 900,20 C1050,30 1200,20 1200,20 L1200,0 Z' fill='white'/%3E%3C/svg%3E\")", maskSize: "100% 100%", WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,0 L0,20 C300,0 600,40 900,20 C1050,30 1200,20 1200,20 L1200,0 Z' fill='white'/%3E%3C/svg%3E\")", WebkitMaskSize: "100% 100%" }} />
      </section>

      {/* SECTION 14 — FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFD93D] via-[#FF9F45] to-[#FF6B6B]">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute left-[10%] top-[20%] text-6xl animate-float" style={{ animationDelay: "0s" }}>🏆</div>
          <div className="absolute right-[15%] top-[15%] text-5xl animate-float" style={{ animationDelay: "1s" }}>📚</div>
          <div className="absolute left-[20%] bottom-[20%] text-4xl animate-float" style={{ animationDelay: "0.5s" }}>🎓</div>
          <div className="absolute right-[10%] bottom-[30%] text-5xl animate-float" style={{ animationDelay: "1.5s" }}>⭐</div>
          <div className="absolute left-[50%] top-[60%] text-3xl animate-float" style={{ animationDelay: "0.8s" }}>✨</div>
        </div>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center md:px-6 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            <Rocket className="h-4 w-4" /> {t("Get Started", "আৰম্ভ কৰক")}
          </span>
          <h2 className="font-play mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {t("Ready To Discover Your Potential?", "তোমাৰ সম্ভাৱনা আৱিষ্কাৰ কৰিবলৈ সাজু নে?")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-white/85">
            {t(
              "Join students across Assam and become part of a tradition that inspires learning, rewards excellence, and helps young minds shine brighter.",
              "অসমজুৰি শিক্ষাৰ্থীসকলৰ সৈতে যোগ দিয়ক আৰু এনে এক পৰম্পৰাৰ অংশ হওক যিয়ে শিক্ষাক প্ৰেৰণা যোগায়, উৎকৰ্ষক পুৰস্কৃত কৰে, আৰু যুৱ মনক উজ্জ্বল কৰি তুলিবলৈ সহায় কৰে।"
            )}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="https://forms.gle/FzyNUBfXyvaZJYHJ7" target="_blank" rel="noopener noreferrer" className="btn-bounce inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-play text-lg font-bold text-[#FF6B6B] shadow-lg transition hover:bg-[#FFF8E7]">
              <Trophy className="h-5 w-5" /> {t("Apply Now", "এতিয়াই আবেদন কৰক")} <ExternalLink className="h-4 w-4" />
            </a>
            <Link to="/contact" className="btn-bounce inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 font-play text-lg font-bold text-white transition hover:bg-white/15">
              <Heart className="h-5 w-5" /> {t("Contact Us", "যোগাযোগ")}
            </Link>
          </div>
          <div className="mt-12 flex justify-center gap-4" aria-hidden="true">
            <span className="inline-block animate-bob text-4xl" style={{ animationDelay: "0s" }}>🧑‍🎓</span>
            <span className="inline-block animate-bob text-4xl" style={{ animationDelay: "0.3s" }}>🏆</span>
            <span className="inline-block animate-bob text-4xl" style={{ animationDelay: "0.6s" }}>📜</span>
            <span className="inline-block text-4xl">📚</span>
            <span className="inline-block animate-bob text-4xl" style={{ animationDelay: "0.2s" }}>⭐</span>
            <span className="inline-block animate-bob text-4xl" style={{ animationDelay: "0.5s" }}>🎓</span>
          </div>
        </div>
      </section>
    </div>
  );
}
