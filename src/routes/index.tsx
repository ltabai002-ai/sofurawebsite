import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Trophy, Sparkles, Calculator, FlaskConical, Globe, Brain, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import founderImg from "@/assets/founder.jpg";
import magazineImg from "@/assets/magazine-cover.jpg";
import { useLang } from "@/components/LanguageContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOFURA Educational Trust — Inspiring Young Minds Since 1982" },
      { name: "description", content: "SOFURA: Assam's beloved children's magazine and statewide Talent Discovery & Scholarship Exam since 1982." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useLang();
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_55%),radial-gradient(circle_at_80%_70%,color-mix(in_oklab,var(--primary)_15%,transparent),transparent_55%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> {t("Since 1982", "১৯৮২ চনৰে পৰা")}
            </span>
            <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] text-primary md:text-6xl lg:text-7xl">
              {t("Inspiring Young Minds", "প্ৰেৰণা দি আহিছোঁ")}
              <br />
              <span className="text-gold">{t("Since 1982", "১৯৮২ চনৰে পৰা")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {t(
                "Honoring the vision of Dr. Bhabendranath Saikia and Ambika Pada Dev Choudhury — a four-decade journey of literature, learning and discovery across Assam.",
                "ড° ভৱেন্দ্ৰনাথ শইকীয়া আৰু অম্বিকা পদ দেৱ চৌধুৰীৰ স্বপ্নক সন্মান জনাই — অসমজুৰি সাহিত্য, শিক্ষা আৰু আৱিষ্কাৰৰ চাৰি দশকীয়া যাত্ৰা।"
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/exam" className="inline-flex items-center gap-2 rounded-2xl bg-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-[var(--shadow-soft)] transition hover:translate-y-[-1px] hover:shadow-[var(--shadow-elegant)]">
                <Trophy className="h-5 w-5" /> {t("Check 2024 Exam Results", "২০২৪ ফলাফল চাওক")}
              </Link>
              <Link to="/magazine" className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary/15 bg-card px-6 py-3.5 font-semibold text-primary transition hover:border-primary/40">
                {t("Read the Magazine", "আলোচনী পঢ়ক")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-primary/15 to-transparent blur-2xl" />
            <img
              src={heroImg}
              alt="Assamese children reading the SOFURA magazine"
              width={1280}
              height={1280}
              className="relative rounded-[2rem] object-cover aspect-square w-full shadow-[var(--shadow-elegant)]"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-soft)]">
              <div className="font-serif text-3xl font-bold text-primary">40+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{t("Years of Legacy", "বছৰৰ ঐতিহ্য")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGACY STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:px-6">
          <img src={founderImg} alt="Dr. Bhabendranath Saikia" width={96} height={96} loading="lazy" className="h-24 w-24 rounded-full border-4 border-gold object-cover shadow-lg" />
          <div className="flex-1 text-center md:text-left">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">{t("Our Legacy", "আমাৰ ঐতিহ্য")}</div>
            <p className="mt-1 font-serif text-xl md:text-2xl">
              {t(
                "A 40-year journey of literature and education in Assam.",
                "অসমত সাহিত্য আৰু শিক্ষাৰ ৪০ বছৰীয়া যাত্ৰা।"
              )}
            </p>
          </div>
          <Link to="/about" className="rounded-full border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold hover:bg-gold hover:text-gold-foreground transition">
            {t("Read the Story", "কাহিনী পঢ়ক")}
          </Link>
        </div>
      </section>

      {/* ACTION PILLARS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold text-primary md:text-5xl">{t("Two Pillars. One Mission.", "দুটা স্তম্ভ। এটা সংকল্প।")}</h2>
          <p className="mt-3 text-muted-foreground">{t("Literature that delights. Examinations that uplift.", "সাহিত্যৰে আনন্দ। পৰীক্ষাৰে উন্নতি।")}</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <PillarCard
            tag={t("Children's Magazine", "শিশু আলোচনী")}
            title={t("Sofura Magazine", "সঁফুৰা আলোচনী")}
            desc={t(
              "Stories, poems and 'Phuloni' translations that have shaped young Assamese readers for four decades.",
              "চাৰি দশক ধৰি অসমীয়া শিশুক গঢ়ি তোলা গল্প, কবিতা আৰু 'ফুলনি' অনুবাদ।"
            )}
            cta={t("Subscribe", "চাবস্ক্ৰাইব")}
            to="/magazine"
            image={magazineImg}
            accent="from-gold/30"
          />
          <PillarCard
            tag={t("Statewide Exam", "ৰাজ্যিক পৰীক্ষা")}
            title={t("Talent Discovery Exam", "প্ৰতিভা সন্ধান পৰীক্ষা")}
            desc={t(
              "Classes 2 to 9 — identifying and nurturing bright young minds across every district of Assam.",
              "দ্বিতীয়ৰ পৰা নৱম শ্ৰেণী — অসমৰ প্ৰতিটো জিলাত প্ৰতিভাৱান শিক্ষাৰ্থীক বিচাৰি উলিয়াওঁ।"
            )}
            cta={t("Apply Now", "আবেদন কৰক")}
            to="/exam"
            image={heroImg}
            accent="from-primary/20"
          />
        </div>
      </section>

      {/* SYLLABUS GRID */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">{t("Exam Syllabus", "পাঠ্যক্ৰম")}</div>
            <h2 className="mt-2 font-serif text-4xl font-bold text-primary md:text-5xl">{t("Four Pillars of Discovery", "চাৰিটা বিষয়")}</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <SyllabusCard icon={<Calculator className="h-7 w-7" />} title={t("Mathematics", "গণিত")} color="text-blue-600 bg-blue-50" />
            <SyllabusCard icon={<FlaskConical className="h-7 w-7" />} title={t("Science", "বিজ্ঞান")} color="text-emerald-600 bg-emerald-50" />
            <SyllabusCard icon={<Globe className="h-7 w-7" />} title={t("General Knowledge", "সাধাৰণ জ্ঞান")} color="text-amber-700 bg-amber-50" />
            <SyllabusCard icon={<Brain className="h-7 w-7" />} title={t("Mental Ability", "মানসিক যোগ্যতা")} color="text-rose-600 bg-rose-50" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--gradient-royal)] px-6 py-16 text-center text-primary-foreground md:px-12">
          <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_50%_0%,white,transparent_60%)]" />
          <BookOpen className="mx-auto h-12 w-12 text-gold" />
          <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">{t("Join the SOFURA Family", "সঁফুৰা পৰিয়ালত যোগ দিয়ক")}</h2>
          <p className="mx-auto mt-3 max-w-2xl opacity-90">
            {t(
              "Subscribe to the magazine, register for the scholarship exam, or explore four decades of inspiration.",
              "আলোচনী চাবস্ক্ৰাইব কৰক, বৃত্তি পৰীক্ষাৰ বাবে নাম পঞ্জীয়ন কৰক, বা চাৰি দশকৰ প্ৰেৰণা চাওক।"
            )}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/exam" className="rounded-2xl bg-gold px-6 py-3 font-semibold text-gold-foreground hover:opacity-90">{t("Register for Exam", "পৰীক্ষাৰ বাবে পঞ্জীয়ন")}</Link>
            <Link to="/contact" className="rounded-2xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">{t("Contact Us", "যোগাযোগ")}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function PillarCard({ tag, title, desc, cta, to, image, accent }: { tag: string; title: string; desc: string; cta: string; to: string; image: string; accent: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-elegant)]">
      <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${accent} to-transparent`}>
        <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="text-xs font-semibold uppercase tracking-widest text-gold">{tag}</div>
        <h3 className="mt-2 font-serif text-2xl font-bold text-primary">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <Link to={to as any} className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
          {cta} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function SyllabusCard({ icon, title, color }: { icon: React.ReactNode; title: string; color: string }) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 text-center transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
      <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}>{icon}</div>
      <h3 className="mt-4 font-serif text-lg font-semibold text-primary">{title}</h3>
      <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-gold" />
    </div>
  );
}
