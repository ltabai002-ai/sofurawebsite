import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen, Sparkles, Scroll, Pen, BookMarked, Puzzle,
  Palette, MessageCircle, Quote, Heart, Clock, MapPin,
  ArrowRight, Newspaper, Users, Trophy
} from "lucide-react";
import founderImg from "@/assets/founder.webp";
import herobanner2 from "@/assets/herobanner2.webp";
import magazineImg from "@/assets/magazine.webp";
import { useLang } from "@/components/LanguageContext";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SOFURA Educational Trust" },
      { name: "description", content: "The 40-year story of SOFURA, founded in 1982 to nurture young Assamese minds through literature and education." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useLang();
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden flex items-center min-h-[50vh] md:min-h-[60vh]">
        <div className="absolute inset-0 -z-20">
          <img src={herobanner2} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" /> {t("Since 1982", "১৯৮২ চনৰে পৰা")}
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              {t("A Legacy of Inspiring Young Minds", "সৰু সৰু মনক প্ৰেৰণা দিয়া এক ঐতিহ্য")}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              {t(
                "From a humble children's magazine to a statewide movement in education and literature — discover the SOFURA story.",
                "এখন সাধাৰণ শিশু আলোচনীৰ পৰা শিক্ষা আৰু সাহিত্যৰ এক ৰাজ্যিক আন্দোলনলৈ — সঁফুৰাৰ কাহিনী।"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDING STORY */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-[300px_1fr] items-start">
          <figure className="rounded-3xl overflow-hidden border-4 border-gold shadow-[var(--shadow-soft)]">
            <img src={founderImg} alt="Dr. Bhabendranath Saikia" width={640} height={800} loading="lazy" className="w-full h-auto object-cover" />
            <figcaption className="bg-primary text-primary-foreground px-4 py-3 text-center text-sm">
              <div className="font-serif text-base">Dr. Bhabendranath Saikia</div>
              <div className="opacity-70 text-xs">{t("Co-founder · 1982", " সহ-প্ৰতিষ্ঠাপক · ১৯৮২")}</div>
            </figcaption>
          </figure>

          <div className="space-y-5 text-foreground/85">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t("Our Beginning", "আমাৰ আৰম্ভণি")}</span>
              <h2 className="mt-1 font-serif text-3xl font-bold text-primary md:text-4xl">
                {t("Born in a Turbulent Era", "অশান্ত সময়ত জন্ম")}
              </h2>
            </div>
            <p>
              {t(
                "In 1982, Ambika Pada Dev Choudhury, along with Dr. Bhabendranath Saikia, founded the children's magazine 'Sofura', published by Bani Prakash. The launch was a significant milestone in the history of Assamese children's magazines.",
                "১৯৮২ চনত, অম্বিকা পদ দেৱ চৌধুৰী আৰু ড° ভৱেন্দ্ৰনাথ শইকীয়াই বাণী প্ৰকাশৰ পৰা প্ৰকাশিত 'সঁফুৰা' শিশু আলোচনীখন প্ৰতিষ্ঠা কৰে। এই আৰম্ভণি অসমীয়া শিশু আলোচনীৰ ইতিহাসত এক গুৰুত্বপূৰ্ণ মাইলৰ খুঁটি আছিল।"
              )}
            </p>
            <p>
              {t(
                "The 1980s were a turbulent time in Assam, significantly impacting people's lives and disrupting youth education. Despite these challenges, the magazine persevered through that tumultuous period. However, in the late 1990s, 'Sofura' experienced a temporary publication halt. It resumed in 2002 with Dhiraj Goswami as the publisher and Dr. Bhabendranath Saikia returning as the chief editor.",
                "১৯৮০ৰ দশক অসমৰ বাবে এক অশান্ত সময় আছিল, যিয়ে লোকৰ জীৱনত গভীৰ প্ৰভাৱ পেলাইছিল আৰু যুৱ শিক্ষাক ব্যাহত কৰিছিল। এই প্ৰত্যাহ্বান সত্ত্বেও, আলোচনীখনে সেই অশান্ত সময়তো জীয়াই থাকিল। কিন্তু ১৯৯০ৰ দশকৰ শেষৰ ফালে 'সঁফুৰা'ই কিছু সময়ৰ বাবে প্ৰকাশ বন্ধ ৰাখিব লগা হ'ল। ২০০২ চনত ধীৰজ গোস্বামী প্ৰকাশক আৰু ড° ভৱেন্দ্ৰনাথ শইকীয়া মুখ্য সম্পাদক হৈ পুনৰ আৰম্ভ হয়।"
              )}
            </p>
            <div className="flex items-center gap-2 text-sm text-gold font-semibold">
              <Heart className="h-4 w-4 fill-gold" />
              {t("Four decades of unwavering dedication to Assam's children.", "অসমৰ শিশুৰ প্ৰতি চাৰি দশকৰ অটুট সমৰ্পণ।")}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t("Journey", "যাত্ৰা")}</span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-primary md:text-4xl">
              {t("A Story of Resilience", "অটলতাৰ কাহিনী")}
            </h2>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gold/30 hidden md:block" />
            <div className="space-y-8 md:space-y-12">
              {[
                {
                  year: "1982",
                  title: t("Foundation", "প্ৰতিষ্ঠা"),
                  desc: t(
                    "Ambika Pada Dev Choudhury and Dr. Bhabendranath Saikia launch 'Sofura' magazine under Bani Prakash — a milestone in Assamese children's publishing.",
                    "অম্বিকা পদ দেৱ চৌধুৰী আৰু ড° ভৱেন্দ্ৰনাথ শইকীয়াই বাণী প্ৰকাশৰ অধীনত 'সঁফুৰা' আলোচনী আৰম্ভ কৰে — অসমীয়া শিশু প্ৰকাশনৰ এক মাইলৰ খুঁটি।"
                  ),
                  side: "left",
                },
                {
                  year: t("Late 1990s", "১৯৯০ৰ দশকৰ শেষ"),
                  title: t("Temporary Halt", "অস্থায়ী বিৰতি"),
                  desc: t(
                    "Due to various challenges, the magazine temporarily ceases publication.",
                    "বিভিন্ন কাৰণত আলোচনীখনৰ প্ৰকাশ কিছু সময়ৰ বাবে বন্ধ হয়।"
                  ),
                  side: "right",
                },
                {
                  year: "2002",
                  title: t("Resurgence", "পুনৰুত্থান"),
                  desc: t(
                    "Dhiraj Goswami takes over as publisher and Dr. Bhabendranath Saikia returns as chief editor, reviving the magazine.",
                    "ধীৰজ গোস্বামী প্ৰকাশক হয় আৰু ড° ভৱেন্দ্ৰনাথ শইকীয়া মুখ্য সম্পাদক হৈ আলোচনীখন পুনৰ জীৱিত কৰে।"
                  ),
                  side: "left",
                },
                {
                  year: t("Present Day", "বৰ্তমান"),
                  title: t("Thriving Legacy", "সমৃদ্ধিশালী ঐতিহ্য"),
                  desc: t(
                    "Under chief editor Kuladhar Saikia and editor Dhruba Kumar Das, 'Sofura' continues to inspire young minds across Assam.",
                    "মুখ্য সম্পাদক কুলধৰ শইকীয়া আৰু সম্পাদক ধ্ৰুৱ কুমাৰ দাসৰ অধীনত 'সঁফুৰা'ই অসমজুৰি শিশুৰ মনত প্ৰেৰণা যোগাই আছে।"
                  ),
                  side: "right",
                },
              ].map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center gap-6 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden md:flex flex-1 justify-end pr-8">
                    {item.side === "left" && (
                      <div className="text-right">
                        <div className="font-serif text-4xl font-bold text-gold">{item.year}</div>
                        <h3 className="text-xl font-bold text-primary mt-1">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground max-w-sm ml-auto">{item.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-gold bg-card shrink-0">
                    <div className="h-3 w-3 rounded-full bg-gold" />
                  </div>
                  <div className="flex-1 pl-8 md:hidden">
                    <div className="font-serif text-2xl font-bold text-gold">{item.year}</div>
                    <h3 className="text-lg font-bold text-primary mt-0.5">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex flex-1 pl-8">
                    {item.side === "right" && (
                      <div className="text-left">
                        <div className="font-serif text-4xl font-bold text-gold">{item.year}</div>
                        <h3 className="text-xl font-bold text-primary mt-1">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground max-w-sm">{item.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL TEAM */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t("Leadership", "নেতৃত্ব")}</span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-primary md:text-4xl">
            {t("The People Behind Sofura", "সঁফুৰাৰ আঁৰৰ লোকসকল")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            {t(
              "From its founders to its current editors, each has contributed to shaping young minds across Assam.",
              "প্ৰতিষ্ঠাপকৰ পৰা বৰ্তমানৰ সম্পাদকলৈ, প্ৰত্যেকেই অসমজুৰি শিশুৰ মন গঢ় দিয়াত অৰিহণা যোগাইছে।"
            )}
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Ambika Pada Dev Choudhury", role: t("Co-founder", "সহ-প্ৰতিষ্ঠাপক"), era: "1982" },
            { name: "Dr. Bhabendranath Saikia", role: t("Co-founder & Chief Editor", "সহ-প্ৰতিষ্ঠাপক আৰু মুখ্য সম্পাদক"), era: "1982 · 2002" },
            { name: "Dhiraj Goswami", role: t("Publisher", "প্ৰকাশক"), era: "2002" },
            { name: "Kumud Goswami", role: t("Editor", "সম্পাদক"), era: "" },
            { name: "Bhabesh Mahanta", role: t("Editor", "সম্পাদক"), era: "" },
            { name: "Rupam Barua", role: t("Editor", "সম্পাদক"), era: "" },
            { name: "Kuladhar Saikia", role: t("Chief Editor", "মুখ্য সম্পাদক"), era: t("Current", "বৰ্তমান") },
            { name: "Dhruba Kumar Das", role: t("Editor", "সম্পাদক"), era: t("Current", "বৰ্তমান") },
          ].map((person, i) => (
            <div key={i} className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-elegant)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-primary">{person.name}</h3>
              <p className="text-sm text-muted-foreground">{person.role}</p>
              {person.era && (
                <div className="mt-2 inline-block rounded-full bg-primary/5 px-3 py-0.5 text-xs font-medium text-primary">
                  {person.era}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MAGAZINE FEATURES */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t("Features", "বৈচিত্ৰ্য")}</span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-primary md:text-4xl">
              {t("What Makes Sofura Special", "সঁফুৰাক বিশেষ কৰি তোলা কি")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              {t(
                "A world of imagination, knowledge and creativity — all within the pages of one remarkable magazine.",
                "কল্পনা, জ্ঞান আৰু সৃষ্টিশীলতাৰ এক জগত — সকলোৱে এক উল্লেখযোগ্য আলোচনীৰ পৃষ্ঠাত।"
              )}
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Newspaper className="h-6 w-6" />, title: t("Articles & Stories", "প্ৰবন্ধ আৰু গল্প"), desc: t("Engaging articles, poems and stories that nurture young minds.", "আকৰ্ষণীয় প্ৰবন্ধ, কবিতা আৰু গল্প যিয়ে শিশুৰ মন গঢ় দিয়ে।") },
              { icon: <BookMarked className="h-6 w-6" />, title: t("Phuloni Translations", "ফুলনি অনুবাদ"), desc: t("Translated Assamese stories by established writers — educational and entertaining.", "প্ৰতিষ্ঠিত লেখকৰ অনুবাদিত অসমীয়া গল্প — শিক্ষামূলক আৰু মনোৰঞ্জক।") },
              { icon: <Puzzle className="h-6 w-6" />, title: t("Puzzles & GK", "প্ৰহেলিকা আৰু সাধাৰণ জ্ঞান"), desc: t("General knowledge and puzzle-solving sections to engage young minds.", "সাধাৰণ জ্ঞান আৰু প্ৰহেলিকা সমাধানৰ বিভাগ যিয়ে শিশুৰ মনক ব্যস্ত ৰাখে।") },
              { icon: <Palette className="h-6 w-6" />, title: t("Illustrations", "চিত্ৰাংকন"), desc: t("Beautiful illustrations that complement every story and article.", "প্ৰতিটো গল্প আৰু প্ৰবন্ধৰ লগত সংগতি ৰাখি সুন্দৰ চিত্ৰাংকন।") },
              { icon: <Pen className="h-6 w-6" />, title: t("Creative Corner", "সৃষ্টিশীল কোণ"), desc: t("Children write stories, poems and create illustrations to express themselves.", "শিশুৱে নিজকে প্ৰকাশ কৰিবলৈ গল্প, কবিতা লিখে আৰু চিত্ৰ অংকন কৰে।") },
              { icon: <MessageCircle className="h-6 w-6" />, title: t("Letters & Jokes", "চিঠি আৰু কৌতুক"), desc: t("Reader letters, jokes and news items that build a vibrant community.", "পাঠকৰ চিঠি, কৌতুক আৰু বাতৰি যাৰ দ্বাৰা এক প্ৰাণবন্ত সম্প্ৰদায় গঢ়ি উঠে।") },
              { icon: <BookOpen className="h-6 w-6" />, title: t("Curiosity Corner", "কৌতূহল কোণ"), desc: t("A dedicated section where children can ask questions on any topic.", "এক বিশেষ বিভাগ য'ত শিশুৱে যিকোনো বিষয়ত প্ৰশ্ন সুধিব পাৰে।") },
              { icon: <Heart className="h-6 w-6" />, title: t("Reader-Friendly", "পাঠক-বন্ধুত্বপূৰ্ণ"), desc: t("Reasonable cost, creative engagements and a focus on intellectual stimulation.", "সুলভ মূল্য, সৃষ্টিশীল ব্যস্ততা আৰু বৌদ্ধিক উদ্দীপনাৰ ওপৰত গুৰুত্ব।") },
            ].map((feat, i) => (
              <div key={i} className="group rounded-2xl border border-border bg-card p-6 text-center transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-gold-foreground">
                  {feat.icon}
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-primary">{feat.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--gradient-royal)] px-6 py-16 text-center text-primary-foreground md:px-12">
          <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_50%_0%,white,transparent_60%)]" />
          <Trophy className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">
            {t("Our Impact Across Assam", "অসমজুৰি আমাৰ প্ৰভাৱ")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl opacity-85">
            {t(
              "For over four decades, SOFURA has touched the lives of countless children across every district of Assam.",
              "চাৰি দশকৰো অধিক সময় ধৰি, সঁফুৰাই অসমৰ প্ৰতিটো জিলাৰ অসংখ্য শিশুৰ জীৱনত স্পৰ্শ কৰিছে।"
            )}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { n: "40+", l: t("Years of Legacy", "বছৰৰ ঐতিহ্য") },
              { n: "1L+", l: t("Students Reached", "ছাত্ৰ-ছাত্ৰী") },
              { n: "30+", l: t("Districts Covered", "জিলা") },
              { n: "1982", l: t("Year Founded", "প্ৰতিষ্ঠা বৰ্ষ") },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-serif text-4xl font-bold text-gold md:text-5xl">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider opacity-80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-4xl px-4 pb-20 md:px-6">
        <div className="relative rounded-[2rem] border border-gold/30 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 px-8 py-14 text-center md:px-16">
          <Quote className="mx-auto h-10 w-10 text-gold/40" />
          <blockquote className="mt-4 font-serif text-xl leading-relaxed text-foreground/90 md:text-2xl">
            {t(
              "\"The editorial team consistently focuses on stimulating children's intellect by providing knowledge on various aspects of life, making 'Sofura' a truly notable magazine.\"",
              "\"সম্পাদকীয় দলে জীৱনৰ বিভিন্ন দিশত জ্ঞান প্ৰদান কৰি শিশুৰ বুদ্ধিমত্তাক উদ্দীপিত কৰাৰ ওপৰত ধাৰাবাহিকভাবে গুৰুত্ব দিয়ে, যাৰ ফলত 'সঁফুৰা' এটা সঁচাকৈয়ে উল্লেখযোগ্য আলোচনী হৈ পৰিছে।\""
            )}
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold/40" />
            <div className="text-sm font-semibold text-gold">{t("SOFURA Editorial Team", "সঁফুৰা সম্পাদকীয় দল")}</div>
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center md:flex-row md:justify-between md:text-left md:px-6">
          <div>
            <h2 className="font-serif text-2xl font-bold md:text-3xl">{t("Be Part of the Legacy", "ঐতিহ্যৰ অংশ হওক")}</h2>
            <p className="mt-1 opacity-80">{t("Subscribe to the magazine or register for the scholarship exam.", "আলোচনী চাবস্ক্ৰাইব কৰক বা বৃত্তি পৰীক্ষাৰ বাবে পঞ্জীয়ন কৰক।")}</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link to="/magazine" className="inline-flex items-center gap-2 rounded-2xl bg-gold px-6 py-3 font-semibold text-gold-foreground transition hover:opacity-90">
              {t("Subscribe", "চাবস্ক্ৰাইব")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/exam" className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10">
              {t("Register for Exam", "পৰীক্ষাৰ বাবে পঞ্জীয়ন")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}