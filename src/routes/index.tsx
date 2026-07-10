import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Quote, Stars, BookOpen, Trophy, Award, Rocket, Heart, ExternalLink, Calculator, FlaskConical, Globe, Brain, Pen, Landmark } from "lucide-react";
import herosection4Img from "@/assets/herosection4.webp";
import mobileherobannerImg from "@/assets/mobileherobanner.webp";
import founderImg from "@/assets/founder.webp";
import sofurawhitelogoImg from "@/assets/sofurawhitelogo.webp";
import magazineImg from "@/assets/magazine.webp";
import prizedisimg from "@/assets/Scholarshipwinners/prizedisimg.webp";
import achievementImg from "@/assets/achievement.webp";
import vid1 from "@/assets/gif/1.mp4";
import vid2 from "@/assets/gif/2.mp4";
import vid3 from "@/assets/gif/3.mp4";
import vid4 from "@/assets/gif/4.mp4";
import noticeBoardImg from "@/assets/notiveboard/sofura-result-2026-2400x400.png";
import vid5 from "@/assets/dnjanksd/1.mp4";
import vid6 from "@/assets/dnjanksd/2.mp4";
import vid7 from "@/assets/dnjanksd/3.mp4";
import vid8 from "@/assets/dnjanksd/4.mp4";
import { useLang } from "@/components/LanguageContext";

const examImages = import.meta.glob<string>('@/assets/examimgassam/*.webp', { eager: true, query: '?url', import: 'default' });
const EXAM_PHOTOS = Object.values(examImages);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOFURA Educational Trust — Inspiring Young Minds Since 1982" },
      { name: "description", content: "SOFURA: Assam's beloved children's magazine and statewide Talent Discovery & Scholarship Exam since 1982." },
    ],
  }),
  component: Home,
});

function SofuMascot({ className = "", speech, style = {} }: { className?: string; speech?: string; style?: React.CSSProperties }) {
  return (
    <div className={`inline-flex flex-col items-center gap-1 ${className}`} style={style}>
      <div className="relative animate-bob">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD93D] to-[#FF9F45] shadow-warm ring-2 ring-white/50 overflow-hidden">
          <div className="absolute top-2 left-3 h-2 w-2 rounded-full bg-white animate-blink" />
          <div className="absolute top-2 right-3 h-2 w-2 rounded-full bg-white animate-blink" />
          <span className="text-3xl mt-1">🧑‍🎓</span>
        </div>
        <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#FFD93D] animate-pulse-ring" />
      </div>
      {speech && (
        <div className="relative mt-1 rounded-2xl border-2 border-[#FFD93D] bg-white px-4 py-2 shadow-warm text-center max-w-[180px]">
          <div className="absolute -top-2 left-4 h-3 w-3 rotate-45 border-l-2 border-t-2 border-[#FFD93D] bg-white" />
          <span className="font-play text-xs font-bold text-[#1A2A5E] whitespace-nowrap">{speech}</span>
        </div>
      )}
    </div>
  );
}

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

function Home() {
  const { t } = useLang();
  return (
    <div>
      <section className="relative">
        <img src={mobileherobannerImg} alt="SOFURA banner" className="w-full block md:hidden" />
        <img src={herosection4Img} alt="SOFURA banner" className="w-full hidden md:block" />
      </section>

      <section className="bg-[#EEF7FF] px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-7xl">
          <img src={noticeBoardImg} alt="Sofura Notice Board" className="w-full rounded-[2rem] object-cover shadow-sm" />
        </div>
      </section>

      {/* SECTION D1a — ABOUT THE SCHOLARSHIP EXAMINATION */}
      <section className="relative overflow-hidden bg-[#FFF8E7]">
        <Doodles count={6} items={["🏆", "📚", "⭐", "🎓", "📜", "💛"]} />
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-28">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FF9F45]">
              <Trophy className="h-4 w-4" /> {t("Scholarship Examination", "বৃত্তি পৰীক্ষা")}
            </span>
          <h2 className="font-play mt-4 text-5xl font-bold text-[#1A2A5E] md:text-6xl lg:text-7xl">
            {t("Discover Talent. Earn Recognition. Build Your Future.", "প্ৰতিভা আৱিষ্কাৰ কৰক। স্বীকৃতি লাভ কৰক। ভৱিষ্যত গঢ়ক।")}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl font-body text-lg text-gray-600">
              {t("The Sofura Talent Discovery & Scholarship Examination has been helping identify and nurture talented students across Assam since 2004.", "সঁফুৰা প্ৰতিভা সন্ধান আৰু বৃত্তি পৰীক্ষাই ২০০৪ চনৰে পৰা অসমৰ প্ৰতিভাৱান শিক্ষাৰ্থীক চিনাক্ত আৰু প্ৰশিক্ষণ দিয়াত সহায় কৰি আহিছে।")}
            </p>
          </div>
          <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
            {/* LEFT — Content */}
            <div>
              <h3 className="font-play text-3xl font-bold text-[#1A2A5E]">
                {t("Sofura Talent Discovery & Scholarship Examination", "সঁফুৰা প্ৰতিভা সন্ধান আৰু বৃত্তি পৰীক্ষা")}
              </h3>
              <div className="mt-5 space-y-4 font-body text-gray-600 leading-relaxed">
                <p>
                  {t(
                    "The Sofura Talent Discovery & Scholarship Examination, organized by the SOFURA Educational Trust, is a statewide educational initiative dedicated to identifying and nurturing academic talent among students across Assam.",
                    "সঁফুৰা শিক্ষা ন্যাসৰ দ্বাৰা আয়োজিত সঁফুৰা প্ৰতিভা সন্ধান আৰু বৃত্তি পৰীক্ষা, অসমজুৰি শিক্ষাৰ্থীসকলৰ মাজত শৈক্ষিক প্ৰতিভা চিনাক্ত আৰু প্ৰশিক্ষণ দিয়াৰ বাবে উৎসৰ্গিত এটি ৰাজ্যিক শিক্ষামূলক উদ্যোগ।"
                  )}
                </p>
                <p>
                  {t(
                    "Conducted annually for students from Classes 2 to 9, the examination encourages healthy competition, builds confidence, and rewards excellence through scholarships, certificates, and statewide recognition.",
                    "শ্ৰেণী ২ৰ পৰা ৯ লৈকে শিক্ষাৰ্থীসকলৰ বাবে বাৰ্ষিকভাৱে পৰিচালিত এই পৰীক্ষাই সুস্থ প্ৰতিযোগিতাক উৎসাহিত কৰে, আত্মবিশ্বাস গঢ়ি তোলে, আৰু বৃত্তি, প্ৰমাণপত্ৰ আৰু ৰাজ্যিক স্বীকৃতিৰ জৰিয়তে উৎকৰ্ষতাক পুৰস্কৃত কৰে।"
                  )}
                </p>
                <p>
                  {t(
                    "The examination evaluates students in Mathematics, Science & Computer Science, English, General Knowledge, Social Sciences, and Mental Ability while helping them prepare for future competitive examinations and academic success.",
                    "পৰীক্ষাই শিক্ষাৰ্থীসকলক গণিত, বিজ্ঞান আৰু কম্পিউটাৰ বিজ্ঞান, ইংৰাজী, সাধাৰণ জ্ঞান, সমাজ বিজ্ঞান আৰু মানসিক যোগ্যতাৰ মূল্যায়ন কৰে আৰু ভৱিষ্যতৰ প্ৰতিযোগিতামূলক পৰীক্ষা আৰু শৈক্ষিক সফলতাৰ বাবে প্ৰস্তুত কৰাত সহায় কৰে।"
                  )}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#FF9F45]">📅 {t("Since 2004", "২০০৪ চনৰে পৰা")}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#4ECDC4]/15 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#4ECDC4]">🎓 {t("Classes 2–9", "শ্ৰেণী ২–৯")}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FF6B6B]/15 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#FF6B6B]">🌍 {t("Across Assam", "অসমজুৰি")}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#FF9F45]">🏆 {t("Scholarships Available", "বৃত্তি উপলব্ধ")}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#4ECDC4]/15 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#4ECDC4]">📜 {t("Merit Certificates", "মেৰিট প্ৰমাণপত্ৰ")}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FF6B6B]/15 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#FF6B6B]">⭐ {t("Statewide Recognition", "ৰাজ্যিক স্বীকৃতি")}</span>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://forms.gle/FzyNUBfXyvaZJYHJ7" target="_blank" rel="noopener noreferrer" className="btn-bounce inline-flex items-center gap-2 rounded-full bg-[#FF6B6B] px-7 py-3.5 font-play text-base font-bold text-white shadow-coral transition hover:bg-[#ff5252]">
                  📝 {t("Register for 2026", "২০২৬ৰ বাবে পঞ্জীয়ন")} <ExternalLink className="h-4 w-4" />
                </a>
                <Link to="/exam" className="btn-bounce inline-flex items-center gap-2 rounded-full border-2 border-[#FFD93D] bg-white px-7 py-3.5 font-play text-base font-bold text-[#1A2A5E] transition hover:border-[#FF9F45] hover:bg-[#FFF8E7]">
                  {t("View Scholarship Details", "বৃত্তিৰ বিবৰণ চাওক")}
                </Link>
              </div>
            </div>
            {/* RIGHT — Achievement Image */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#FFD93D]/40 via-[#FF6B6B]/20 to-[#4ECDC4]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-warm border-2 border-[#FFD93D]/30">
                <img src={achievementImg} alt="Achievement" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#EEF7FF]" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,35 C80,35 100,5 200,5 C300,5 320,35 400,35 C480,35 500,5 600,5 C700,5 720,35 800,35 C880,35 900,5 1000,5 C1100,5 1120,35 1200,35 L1200,40 L0,40 Z' fill='white'/%3E%3C/svg%3E\")", maskSize: "100% 100%", WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,35 C80,35 100,5 200,5 C300,5 320,35 400,35 C480,35 500,5 600,5 C700,5 720,35 800,35 C880,35 900,5 1000,5 C1100,5 1120,35 1200,35 L1200,40 L0,40 Z' fill='white'/%3E%3C/svg%3E\")", WebkitMaskSize: "100% 100%" }} />
      </section>

      {/* SECTION A — Where Curious Minds Come to Play & Learn! */}
      <section className="relative overflow-hidden bg-[#FFF8E7]">
        <Doodles count={8} />
        <SofuMascot
          className="absolute -left-2 bottom-4 z-10 hidden md:flex"
          speech={t("Hi there! Ready to explore?", "নমস্কাৰ! অন্বেষণ কৰিবলৈ সাজু নে?")}
        />
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#FFD93D] bg-white px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2A5E] shadow-sm">
                ✍️ {t("Write. Create. Inspire.", "লিখা। সৃষ্টি কৰা। অনুপ্ৰাণিত কৰা।")}
              </span>
              <h1 className="font-play mt-5 text-5xl font-bold leading-[1.1] text-[#1A2A5E] md:text-6xl lg:text-7xl">
                {t("Publish Your Work In Sofura Magazine", "সঁফুৰা আলোচনীত আপোনাৰ কাম প্ৰকাশ কৰক")}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600 font-body">
                {t(
                  "Share your stories, poems, drawings, and articles with readers across Assam. Get published in Sofura — Assam's beloved monthly children's magazine since 1982.",
                  "অসমজুৰি পঢ়ুৱৈৰ সৈতে আপোনাৰ কাহিনী, কবিতা, চিত্ৰ আৰু প্ৰবন্ধ শ্বেয়াৰ কৰক। ১৯৮২ চনৰে পৰা অসমৰ প্ৰিয় মাহিলী শিশু আলোচনী সঁফুৰাত প্ৰকাশিত হওক।"
                )}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://forms.gle/EuSqd3TMgieiuXMXA" target="_blank" rel="noopener noreferrer" className="btn-bounce inline-flex items-center gap-2 rounded-full bg-[#FF6B6B] px-8 py-4 font-play text-lg font-bold text-white shadow-coral transition hover:bg-[#ff5252]">
                  ✏️ {t("Submit Your Work", "আপোনাৰ কাম দাখিল কৰক")} <ExternalLink className="h-4 w-4" />
                </a>
                <a href="https://drive.google.com/file/d/1fq-tpcikfvFRlJyno7ojc1fYarZfIoSv/view" target="_blank" rel="noopener noreferrer" className="btn-bounce inline-flex items-center gap-2 rounded-full border-2 border-[#FFD93D] bg-white px-8 py-4 font-play text-lg font-bold text-[#1A2A5E] transition hover:border-[#FF9F45] hover:bg-[#FFF8E7]">
                  🏆 {t("Check 2024 Results", "২০২৪ ফলাফল চাওক")} <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#FFD93D]/40 via-[#FF6B6B]/20 to-[#4ECDC4]/20 blur-2xl" />
              <img src={magazineImg} alt="Assamese children reading the SOFURA magazine" className="relative rounded-[2rem] w-full h-auto shadow-warm" />
              <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl border-2 border-[#FFD93D] bg-white px-5 py-4 shadow-warm">
                <span className="font-play text-4xl font-bold text-[#FF6B6B]">40+</span>
                <div>
                  <div className="font-play text-sm font-bold text-[#1A2A5E]">{t("Years", "বছৰ")}</div>
                  <div className="font-body text-xs text-gray-500">{t("of Legacy", "ঐতিহ্য")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#1A2A5E]" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,35 C80,35 100,5 200,5 C300,5 320,35 400,35 C480,35 500,5 600,5 C700,5 720,35 800,35 C880,35 900,5 1000,5 C1100,5 1120,35 1200,35 L1200,40 L0,40 Z' fill='white'/%3E%3C/svg%3E\")", maskSize: "100% 100%", WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,35 C80,35 100,5 200,5 C300,5 320,35 400,35 C480,35 500,5 600,5 C700,5 720,35 800,35 C880,35 900,5 1000,5 C1100,5 1120,35 1200,35 L1200,40 L0,40 Z' fill='white'/%3E%3C/svg%3E\")", WebkitMaskSize: "100% 100%" }} />
      </section>

      {/* SECTION B — Navy Quote Strip */}
      <section className="relative overflow-hidden bg-[#1A2A5E]">
        <Doodles
          count={10}
          items={["✦", "✧", "★", "✧", "✦", "★", "✧", "✦", "★", "✧"]}
          className="opacity-30"
        />
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 md:flex-row md:px-6 md:py-16">
          <div className="relative shrink-0">
            <img src={sofurawhitelogoImg} alt="Sofura White Logo" width={120} height={120} loading="lazy" className="h-28 w-28 rounded-full border-4 border-[#FFD93D] object-cover shadow-lg ring-2 ring-[#FFD93D]/30" />
            <div className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFD93D] shadow-md">
              <Quote className="h-4 w-4 text-[#1A2A5E]" />
            </div>
            <div className="absolute -top-1 -left-1 text-lg animate-sparkle">✨</div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
              <span className="h-1 w-6 rounded-full bg-[#FFD93D]" />
              <span className="font-play text-xs font-bold uppercase tracking-widest text-[#FFD93D]">{t("Our Legacy", "আমাৰ ঐতিহ্য")}</span>
              <span className="h-1 w-6 rounded-full bg-[#FFD93D]" />
            </div>
      <p className="font-play text-2xl font-bold leading-snug text-white md:text-3xl">
        {t("Inspiring generations of young dreamers across Assam since 1982", "১৯৮২ চনৰে পৰা অসমজুৰি সপোন দেখুৱাইছে")} ✨
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 font-play text-xs font-bold text-[#FFD93D]">
          📖 {t("Since 1982", "১৯৮২ চনৰে পৰা")}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 font-play text-xs font-bold text-[#4ECDC4]">
          🏆 {t("Scholarship Examination Since 2004", "২০০৪ চনৰে পৰা বৃত্তি পৰীক্ষা")}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 font-play text-xs font-bold text-[#FF9F45]">
          📰 {t("Monthly Children's Magazine", "মাহিলী শিশু আলোচনী")}
        </span>
      </div>
          </div>
          <Link to="/about" className="group inline-flex items-center gap-2 rounded-full border-2 border-[#FFD93D]/60 px-7 py-3.5 font-play text-sm font-bold text-[#FFD93D] transition hover:bg-[#FFD93D] hover:text-[#1A2A5E] hover:shadow-lg">
            {t("Read the Story", "কাহিনী পঢ়ক")}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* SECTION D1 — THE SOFURA ECOSYSTEM */}
      <section className="relative overflow-hidden bg-[#FFF8E7]">
        <Doodles count={6} />
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FF9F45]">
              <BookOpen className="h-4 w-4" /> {t("The Sofura Ecosystem", "সঁফুৰা ইক'ছিষ্টেম")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-[#1A2A5E] md:text-5xl">
              {t("One Platform. Two Opportunities.", "একেটি মঞ্চ। দুটা সুযোগ।")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-body text-lg text-gray-600">
              {t(
                "For over four decades, Sofura has helped young minds grow through creativity, learning, and recognition. Students can participate in two unique ways.",
                "চাৰি দশকৰো অধিক সময় ধৰি, সঁফুৰাই সৃজনশীলতা, শিক্ষা আৰু স্বীকৃতিৰ জৰিয়তে যুৱ মনৰ বিকাশত সহায় কৰি আহিছে। শিক্ষাৰ্থীসকলে দুটা অনন্য উপায়ত অংশগ্ৰহণ কৰিব পাৰে।"
              )}
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Card 1 — Magazine */}
            <div className="card-tilt group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FFD93D] to-[#FF9F45] p-1 shadow-warm">
              <div className="rounded-[calc(2.5rem-4px)] bg-white p-6 md:p-8 flex flex-col min-h-[400px]">
                <span className="inline-block w-fit rounded-full bg-[#FFD93D]/30 px-4 py-1.5 font-play text-xs font-bold text-[#FF9F45] mb-4">
                  {t("Monthly Children's Magazine", "মাহিলী শিশু আলোচনী")}
                </span>
                <div className="relative -mx-6 -mt-2 mb-5 h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFD93D]/20 to-[#FF9F45]/10 flex items-center justify-center gap-1 px-2">
                  <video src={vid1} autoPlay muted loop playsInline className="h-4/5 w-1/4 rounded-lg object-cover shadow-sm" />
                  <video src={vid2} autoPlay muted loop playsInline className="h-4/5 w-1/4 rounded-lg object-cover shadow-sm" />
                  <video src={vid3} autoPlay muted loop playsInline className="h-4/5 w-1/4 rounded-lg object-cover shadow-sm" />
                  <video src={vid4} autoPlay muted loop playsInline className="h-4/5 w-1/4 rounded-lg object-cover shadow-sm" />
                </div>
                <h3 className="font-play text-2xl font-bold text-[#1A2A5E]">
                  {t("Get Published In Sofura", "সঁফুৰাত প্ৰকাশিত হওক")}
                </h3>
                <p className="mt-2 font-body text-gray-600">
                  {t("Sofura is a monthly children's magazine where young writers, artists, and creative thinkers can showcase their talent to readers across Assam.", "সঁফুৰা এটি মাহিলী শিশু আলোচনী য'ত যুৱ লেখক, শিল্পী আৰু সৃজনশীল চিন্তাবিদসকলে অসমজুৰি পঢ়ুৱৈৰ আগত নিজৰ প্ৰতিভা প্ৰদৰ্শন কৰিব পাৰে।")}
                </p>
                <p className="mt-3 font-play text-sm font-bold text-[#FF9F45]">
                  {t("Students can submit:", "শিক্ষাৰ্থীয়ে দাখিল কৰিব পাৰে:")}
                </p>
                <ul className="mt-2 space-y-1">
                  {[
                    { icon: "✏️", text: t("Stories", "কাহিনী") },
                    { icon: "📖", text: t("Poems", "কবিতা") },
                    { icon: "🎨", text: t("Drawings", "চিত্ৰ") },
                    { icon: "📝", text: t("Articles", "প্ৰবন্ধ") },
                    { icon: "💡", text: t("Creative Writing", "সৃজনশীল লেখা") },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 font-body text-sm text-gray-600">
                      <span>{item.icon}</span> {item.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-4 py-1.5">
                    <span className="font-play text-xs font-bold text-[#FF9F45]">📅 {t("Published Every Month", "প্ৰতি মাহে প্ৰকাশিত")}</span>
                  </span>
                </div>
                <div className="mt-auto pt-6">
                  <a href="https://forms.gle/EuSqd3TMgieiuXMXA" target="_blank" rel="noopener noreferrer" className="btn-bounce inline-flex items-center gap-2 rounded-full bg-[#FF9F45] px-7 py-3.5 font-play text-base font-bold text-white shadow-md transition hover:bg-[#FF6B6B]">
                    {t("Submit Your Work", "আপোনাৰ কাম দাখিল কৰক")} <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            {/* Card 2 — Exam */}
            <div className="card-tilt group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] p-1 shadow-coral">
              <div className="rounded-[calc(2.5rem-4px)] bg-white p-6 md:p-8 flex flex-col min-h-[400px]">
                <span className="inline-block w-fit rounded-full bg-[#FF6B6B]/20 px-4 py-1.5 font-play text-xs font-bold text-[#FF6B6B] mb-4">
                  {t("Sofura Talent Discovery Exam", "সঁফুৰা প্ৰতিভা সন্ধান পৰীক্ষা")}
                </span>
                <div className="relative -mx-6 -mt-2 mb-5 h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF6B6B]/20 to-[#4ECDC4]/10 flex items-center justify-center gap-1 px-2">
                  <video src={vid5} autoPlay muted loop playsInline className="h-4/5 w-1/4 rounded-lg object-cover shadow-sm" />
                  <video src={vid6} autoPlay muted loop playsInline className="h-4/5 w-1/4 rounded-lg object-cover shadow-sm" />
                  <video src={vid7} autoPlay muted loop playsInline className="h-4/5 w-1/4 rounded-lg object-cover shadow-sm" />
                  <video src={vid8} autoPlay muted loop playsInline className="h-4/5 w-1/4 rounded-lg object-cover shadow-sm" />
                </div>
                <h3 className="font-play text-2xl font-bold text-[#1A2A5E]">
                  {t("Participate In The Scholarship Examination", "বৃত্তি পৰীক্ষাত অংশগ্ৰহণ কৰক")}
                </h3>
                <p className="mt-2 font-body text-gray-600">
                  {t("Students from Classes 2–9 can participate in the annual Sofura Talent Discovery & Scholarship Examination and compete for scholarships, certificates, and statewide recognition.", "শ্ৰেণী ২–৯ৰ শিক্ষাৰ্থীসকলে বাৰ্ষিক সঁফুৰা প্ৰতিভা সন্ধান আৰু বৃত্তি পৰীক্ষাত অংশগ্ৰহণ কৰিব পাৰে আৰু বৃত্তি, প্ৰমাণপত্ৰ আৰু ৰাজ্যিক স্বীকৃতিৰ বাবে প্ৰতিদ্বন্দ্বিতা কৰিব পাৰে।")}
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    { icon: "🏆", text: t("Scholarships Up To ₹16,000", "বৃত্তি ₹১৬,০০০ লৈকে") },
                    { icon: "📜", text: t("Merit Certificates", "মেৰিট প্ৰমাণপত্ৰ") },
                    { icon: "🎖", text: t("Statewide Recognition", "ৰাজ্যিক স্বীকৃতি") },
                    { icon: "📚", text: t("Academic Growth", "শৈক্ষিক বিকাশ") },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 font-body text-sm text-gray-600">
                      <span>{item.icon}</span> {item.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#4ECDC4]/15 px-4 py-1.5">
                    <span className="font-play text-xs font-bold text-[#4ECDC4]">📍 {t("Conducted Every Year Across Assam", "প্ৰতি বছৰে অসমজুৰি পৰিচালিত")}</span>
                  </span>
                </div>
                <div className="mt-auto pt-6">
                  <Link to="/exam" className="btn-bounce inline-flex items-center gap-2 rounded-full bg-[#4ECDC4] px-7 py-3.5 font-play text-base font-bold text-white shadow-md transition hover:bg-[#FF6B6B]">
                    {t("Explore Scholarship Exam", "বৃত্তি পৰীক্ষা অন্বেষণ")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#EEF7FF]" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 48'%3E%3Cpath d='M0,0 C200,40 400,0 600,30 C800,48 1000,0 1200,20 L1200,48 L0,48 Z' fill='white'/%3E%3C/svg%3E\")", maskSize: "100% 100%", WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 48'%3E%3Cpath d='M0,0 C200,40 400,0 600,30 C800,48 1000,0 1200,20 L1200,48 L0,48 Z' fill='white'/%3E%3C/svg%3E\")", WebkitMaskSize: "100% 100%" }} />
      </section>

      {/* SECTION D2 — Four Worlds to Explore! */}
      <section className="relative overflow-hidden bg-[#EEF7FF]">
        <Doodles count={8} />
        <SofuMascot
          className="absolute top-4 right-4 z-10 hidden md:flex"
          speech={t("So many worlds to discover!", "অনেক জগত আৱিষ্কাৰ কৰিবলৈ!")}
        />
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4ECDC4]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#4ECDC4]">
              <Stars className="h-4 w-4" /> {t("Explore & Learn", "অন্বেষণ আৰু শিকা")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-[#1A2A5E] md:text-5xl">
              {t("Subjects Covered In The Scholarship Examination", "বৃত্তি পৰীক্ষাত অন্তৰ্ভুক্ত বিষয়সমূহ")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-body text-lg text-gray-600">
              {t("Students are assessed across six important areas that encourage knowledge, reasoning, curiosity, and academic excellence.", "ছটা গুৰুত্বপূৰ্ণ ক্ষেত্ৰত শিক্ষাৰ্থীসকলৰ মূল্যায়ন কৰা হয় যিয়ে জ্ঞান, যুক্তি, কৌতূহল আৰু শৈক্ষিক উৎকৰ্ষতাক উৎসাহিত কৰে।")}
            </p>
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
        {/* Curved blob divider D→E */}
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "linear-gradient(to bottom, transparent 50%, #FFD93D 50%)", clipPath: "ellipse(70% 100% at 50% 100%)" }} />
      </section>

      {/* SECTION D3 — SCHOLARSHIP REWARDS */}
      <section className="relative overflow-hidden bg-[#FFF8E7]">
        <Doodles count={6} items={["🏆", "📜", "⭐", "🎓", "💛", "🌟"]} />
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FF9F45]">
              <Trophy className="h-4 w-4" /> {t("Scholarship Rewards", "বৃত্তি পুৰস্কাৰ")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-[#1A2A5E] md:text-5xl">
              {t("Scholarships Worth Winning", "বৃত্তি যাৰ বাবে প্ৰতিদ্বন্দ্বিতা কৰা মূল্যৱান")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-body text-lg text-gray-600">
              {t("Recognizing and rewarding outstanding academic achievement.", "অসাধাৰণ শৈক্ষিক সাফল্যক চিনাক্ত কৰা আৰু পুৰস্কৃত কৰা।")}
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            <div className="card-tilt rounded-[2rem] bg-gradient-to-br from-[#FFD93D]/20 to-[#FF9F45]/10 p-6 shadow-md text-center border border-[#FFD93D]/30 md:p-8">
              <span className="text-6xl block mb-4">🏆</span>
              <h3 className="font-play text-2xl font-bold text-[#1A2A5E]">{t("First Prize", "প্ৰথম পুৰস্কাৰ")}</h3>
              <p className="mt-2 font-play text-3xl font-bold text-[#FF9F45]">{t("₹16,000 Scholarship", "₹১৬,০০০ বৃত্তি")}</p>
              <p className="mt-1 font-body text-sm text-gray-500">{t("Top Rank Holders", "শীৰ্ষ স্থানীয়")}</p>
            </div>
            <div className="card-tilt rounded-[2rem] bg-gradient-to-br from-[#4ECDC4]/20 to-[#4ECDC4]/5 p-6 shadow-md text-center border border-[#4ECDC4]/30 md:p-8">
              <span className="text-6xl block mb-4">🥈</span>
              <h3 className="font-play text-2xl font-bold text-[#1A2A5E]">{t("Second Prize", "দ্বিতীয় পুৰস্কাৰ")}</h3>
              <p className="mt-2 font-play text-3xl font-bold text-[#4ECDC4]">{t("₹14,000 Scholarship", "₹১৪,০০০ বৃত্তি")}</p>
              <p className="mt-1 font-body text-sm text-gray-500">{t("Outstanding Performance", "অসাধাৰণ প্ৰদৰ্শন")}</p>
            </div>
            <div className="card-tilt rounded-[2rem] bg-gradient-to-br from-[#FF6B6B]/20 to-[#FF6B6B]/5 p-6 shadow-md text-center border border-[#FF6B6B]/30 md:p-8">
              <span className="text-6xl block mb-4">🥉</span>
              <h3 className="font-play text-2xl font-bold text-[#1A2A5E]">{t("Third Prize", "তৃতীয় পুৰস্কাৰ")}</h3>
              <p className="mt-2 font-play text-3xl font-bold text-[#FF6B6B]">{t("₹12,000 Scholarship", "₹১২,০০০ বৃত্তি")}</p>
              <p className="mt-1 font-body text-sm text-gray-500">{t("Meritorious Achievement", "যোগ্যতা অৰ্জন")}</p>
            </div>
            <div className="card-tilt rounded-[2rem] bg-gradient-to-br from-[#A855F7]/20 to-[#A855F7]/5 p-6 shadow-md text-center border border-[#A855F7]/30 md:p-8">
              <span className="text-6xl block mb-4">🎖️</span>
              <h3 className="font-play text-2xl font-bold text-[#1A2A5E]">{t("Fourth Prize", "চতুৰ্থ পুৰস্কাৰ")}</h3>
              <p className="mt-2 font-play text-3xl font-bold text-[#A855F7]">{t("₹11,000 Scholarship", "₹১১,০০০ বৃত্তি")}</p>
              <p className="mt-1 font-body text-sm text-gray-500">{t("Excellent Effort", "উৎকৃষ্ট প্ৰচেষ্টা")}</p>
            </div>
            <div className="card-tilt rounded-[2rem] bg-gradient-to-br from-[#3B82F6]/20 to-[#3B82F6]/5 p-6 shadow-md text-center border border-[#3B82F6]/30 md:p-8">
              <span className="text-6xl block mb-4">⭐</span>
              <h3 className="font-play text-2xl font-bold text-[#1A2A5E]">{t("Fifth Prize", "পঞ্চম পুৰস্কাৰ")}</h3>
              <p className="mt-2 font-play text-3xl font-bold text-[#3B82F6]">{t("₹10,000 Scholarship", "₹১০,০০০ বৃত্তি")}</p>
              <p className="mt-1 font-body text-sm text-gray-500">{t("Bright Talent", "উজ্জ্বল প্ৰতিভা")}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Link to="/prize" className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-6 py-3 font-play text-sm font-bold text-[#FF9F45] transition hover:bg-[#FFD93D]/30">
              {t("View Full Prize Details", "সম্পূৰ্ণ পুৰস্কাৰৰ ধন চাওক")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/15 px-5 py-2">
              <span className="font-play text-sm font-bold text-[#FF9F45]">📜 {t("Merit Certificates", "মেৰিট প্ৰমাণপত্ৰ")}</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#4ECDC4]/15 px-5 py-2">
              <span className="font-play text-sm font-bold text-[#4ECDC4]">🎖 {t("Statewide Recognition", "ৰাজ্যিক স্বীকৃতি")}</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FF6B6B]/15 px-5 py-2">
              <span className="font-play text-sm font-bold text-[#FF6B6B]">⭐ {t("Academic Excellence", "শৈক্ষিক উৎকৰ্ষ")}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: "linear-gradient(to bottom, transparent 50%, #FFD93D 50%)", clipPath: "ellipse(70% 100% at 50% 100%)" }} />
      </section>

      {/* SECTION — SOFURA IMPACT */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD93D] via-[#FF9F45] to-[#FF6B6B]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, #1A2A5E 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <Doodles count={6} items={["🏆", "📚", "⭐", "🎓", "📜", "🌟"]} className="opacity-30" />
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 font-play text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              <Award className="h-3 w-3" /> {t("SOFURA IMPACT", "সঁফুৰা প্ৰভাৱ")}
            </span>
            <h2 className="font-play mt-2 text-2xl font-bold text-white md:text-3xl">
              {t("Shaping Young Minds Across Assam", "অসমজুৰি যুৱ মন গঢ় দিয়া")}
            </h2>
            <p className="mx-auto mt-1 max-w-2xl font-body text-sm text-white/85">
              {t("More than two decades of discovering talent, rewarding excellence, and inspiring students across the state.", "দুই দশকৰো অধিক সময় ধৰি প্ৰতিভা আৱিষ্কাৰ, উৎকৰ্ষতাক পুৰস্কৃত কৰা, আৰু ৰাজ্যজুৰি শিক্ষাৰ্থীক অনুপ্ৰাণিত কৰা।")}
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card-tilt rounded-[1.5rem] bg-white/15 backdrop-blur-sm p-4 shadow-md text-center border border-white/20 md:p-5">
              <span className="text-2xl block mb-2">🏆</span>
              <h3 className="font-play text-xl font-bold text-white"><CountUp target={20} suffix="+ " /><span>{t("Years", "বছৰ")}</span></h3>
              <p className="mt-1 font-body text-[11px] text-white/70">{t("Talent Discovery Examination", "প্ৰতিভা সন্ধান পৰীক্ষা")}</p>
            </div>
            <div className="card-tilt rounded-[1.5rem] bg-white/15 backdrop-blur-sm p-4 shadow-md text-center border border-white/20 md:p-5">
              <span className="text-2xl block mb-2">👨‍🎓</span>
              <h3 className="font-play text-xl font-bold text-white"><CountUp target={50000} suffix="+" /></h3>
              <p className="mt-1 font-body text-[11px] text-white/70">{t("Students Participated", "অংশগ্ৰহণকাৰী শিক্ষাৰ্থী")}</p>
            </div>
            <div className="card-tilt rounded-[1.5rem] bg-white/15 backdrop-blur-sm p-4 shadow-md text-center border border-white/20 md:p-5">
              <span className="text-2xl block mb-2">📍</span>
              <h3 className="font-play text-xl font-bold text-white"><CountUp target={200} suffix="+" /></h3>
              <p className="mt-1 font-body text-[11px] text-white/70">{t("Examination Centres", "পৰীক্ষা কেন্দ্ৰ")}</p>
            </div>
            <div className="card-tilt rounded-[1.5rem] bg-white/15 backdrop-blur-sm p-4 shadow-md text-center border border-white/20 md:p-5">
              <span className="text-2xl block mb-2">🎖</span>
              <h3 className="font-play text-xl font-bold text-white"><CountUp target={5000} suffix="+" /></h3>
              <p className="mt-1 font-body text-[11px] text-white/70">{t("Scholarship Recipients", "বৃত্তি প্ৰাপক")}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-secondary/30" style={{ maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 48'%3E%3Cpath d='M0,20 C200,0 400,40 600,20 C800,0 1000,40 1200,24 L1200,48 L0,48 Z' fill='white'/%3E%3C/svg%3E\")", maskSize: "100% 100%", WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 48'%3E%3Cpath d='M0,20 C200,0 400,40 600,20 C800,0 1000,40 1200,24 L1200,48 L0,48 Z' fill='white'/%3E%3C/svg%3E\")", WebkitMaskSize: "100% 100%" }} />
      </section>

      {/* SECTION E1 — SPECIAL RECOGNITION */}
      <section className="relative overflow-hidden bg-[#1A2A5E]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-15" aria-hidden="true">
          <span className="absolute left-[8%] top-[15%] text-3xl animate-float" style={{ animationDelay: "0s" }}>🏆</span>
          <span className="absolute right-[12%] top-[20%] text-2xl animate-float" style={{ animationDelay: "1s" }}>🎖</span>
          <span className="absolute left-[5%] bottom-[25%] text-xl animate-float" style={{ animationDelay: "2s" }}>📜</span>
          <span className="absolute right-[8%] bottom-[30%] text-2xl animate-float" style={{ animationDelay: "0.5s" }}>⭐</span>
          <span className="absolute left-[20%] top-[60%] text-lg animate-twinkle">🎓</span>
          <span className="absolute right-[25%] top-[55%] text-lg animate-twinkle" style={{ animationDelay: "1.5s" }}>✨</span>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-5 py-1.5 font-play text-xs font-bold uppercase tracking-wider text-[#FFD93D]">
              <Award className="h-4 w-4" /> {t("Special Recognition", "বিশেষ স্বীকৃতি")}
            </span>
            <h2 className="font-play mt-4 text-4xl font-bold text-white md:text-5xl">
              {t("Recognized By Educational Leaders", "শিক্ষা নেতৃবৃন্দৰ দ্বাৰা স্বীকৃত")}
            </h2>
          </div>
          <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
            {/* LEFT — Image Placeholder */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#FFD93D]/30 via-[#FF6B6B]/15 to-[#4ECDC4]/15 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-[#FFD93D]/20 shadow-warm">
                <img src={prizedisimg} alt="Dr. Ranoj Pegu Award Ceremony" className="w-full h-auto object-cover" />
              </div>
            </div>
            {/* RIGHT — Content */}
            <div>
              <p className="font-body text-lg leading-relaxed text-white/80">
                {t(
                  "The Sofura Talent Discovery & Scholarship Examination has been inspiring and recognizing talented students across Assam since 2004.",
                  "সঁফুৰা প্ৰতিভা সন্ধান আৰু বৃত্তি পৰীক্ষাই ২০০৪ চনৰে পৰা অসমৰ প্ৰতিভাৱান শিক্ষাৰ্থীক অনুপ্ৰাণিত আৰু স্বীকৃতি দি আহিছে।"
                )}
              </p>
              <p className="mt-4 font-body text-lg leading-relaxed text-white/70">
                {t(
                  "Every year, outstanding performers are honoured during the scholarship award ceremony, graced by Dr. Ranoj Pegu, Hon'ble Education Minister of Assam. The event celebrates academic excellence and encourages students to pursue their educational dreams with confidence.",
                  "প্ৰতি বছৰে, বিশিষ্ট শিক্ষাৰ্থীসকলক বৃত্তি বিতৰণী অনুষ্ঠানত সন্মান জনোৱা হয়, যি অনুষ্ঠান অসমৰ মাননীয় শিক্ষামন্ত্ৰী ড০ ৰণোজ পেগুৰ দ্বাৰা সন্মানিত। এই অনুষ্ঠানে শৈক্ষিক উৎকৰ্ষতা উদযাপন কৰে আৰু শিক্ষাৰ্থীসকলক আত্মবিশ্বাসেৰে তেওঁলোকৰ শিক্ষামূলক সপোন অনুসৰণ কৰিবলৈ উৎসাহিত কৰে।"
                )}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#FFD93D]">✓ {t("Since 2004", "২০০৪ চনৰে পৰা")}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#4ECDC4]">✓ {t("Across Assam", "অসমজুৰি")}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#FF9F45]">✓ {t("Scholarship Awards", "বৃত্তি পুৰস্কাৰ")}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <span className="font-play text-sm font-bold text-[#FF6B6B]">✓ {t("Education Minister Recognition", "শিক্ষামন্ত্ৰীৰ স্বীকৃতি")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WinnersGallery />
    </div>
  );
}

const WINNERS = [
  { name: "Anjali Sharma", year: "2024", rank: "1st", school: "Holy Cross School, Guwahati", amount: "₹5,000" },
  { name: "Rohan Das", year: "2024", rank: "2nd", school: "Don Bosco School, Jorhat", amount: "₹3,000" },
  { name: "Priya Bora", year: "2024", rank: "3rd", school: "St. Mary's School, Dibrugarh", amount: "₹2,000" },
  { name: "Arnab Kalita", year: "2023", rank: "Merit", school: "Sankardev Vidyalaya, Nagaon", amount: "₹1,000" },
  { name: "Mitu Saikia", year: "2023", rank: "Merit", school: "Jawahar Navodaya Vidyalaya, Golaghat", amount: "₹1,000" },
  { name: "Bikash Sarma", year: "2023", rank: "Merit", school: "Kendriya Vidyalaya, Tezpur", amount: "₹1,000" },
  { name: "Deepika Nath", year: "2022", rank: "Merit", school: "St. Francis School, Silchar", amount: "₹1,000" },
  { name: "Himanshu Deka", year: "2022", rank: "Merit", school: "Shankardev Vidya Niketan, Tinsukia", amount: "₹1,000" },
  { name: "Nabanita Sarma", year: "2022", rank: "Merit", school: "Sri Sri Gyan Niketan, Barpeta", amount: "₹1,000" },
  { name: "Pallav Bora", year: "2021", rank: "Merit", school: "BBC English School, Bongaigaon", amount: "₹1,000" },
];

function WinnersGallery() {
  const { t } = useLang();
  return (
    <section className="bg-gradient-to-b from-transparent to-secondary/30 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
            <Award className="h-4 w-4" /> {t("Scholarship Winners", "বৃত্তি বিজয়ী")}
          </span>
          <h2 className="mt-2 font-serif text-4xl font-bold text-primary md:text-5xl">
            {t("Our Bright Stars", "আমাৰ উজ্জ্বল তাৰকাসকল")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            {t(
              "Celebrating the achievements of our talented scholarship recipients from across Assam.",
              "অসমজুৰি প্ৰতিভাৱান বৃত্তি বিজয়ীসকলৰ সাফল্য উদযাপন।",
            )}
          </p>
        </div>
      </div>
      <div className="relative w-screen -ml-[50vw] left-1/2 overflow-hidden">
        <div className="flex animate-marquee gap-6" style={{ width: "max-content" }}>
          {[...WINNERS, ...WINNERS].map((w, i) => (
            <div key={i} className="w-[300px] flex-shrink-0">
              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-elegant)]">
                <div className="relative overflow-hidden bg-secondary">
                  <img
                    src={EXAM_PHOTOS[i % EXAM_PHOTOS.length]}
                    alt={w.name}
                    width={1280}
                    height={1280}
                    className="object-cover aspect-square w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <>{count.toLocaleString()}{suffix}</>;
}
