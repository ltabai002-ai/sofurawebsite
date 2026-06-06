import { createFileRoute } from "@tanstack/react-router";
import founderImg from "@/assets/founder.jpg";
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
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
      <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t("Our Story", "আমাৰ কাহিনী")}</span>
      <h1 className="mt-2 font-serif text-5xl font-bold text-primary md:text-6xl">{t("Four Decades of Discovery", "চাৰি দশকৰ আৱিষ্কাৰ")}</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
        {t(
          "Founded in 1982 by Dr. Bhabendranath Saikia and Ambika Pada Dev Choudhury, SOFURA began as a monthly children's magazine devoted to child development through literature, world history and creative expression.",
          "১৯৮২ চনত ড° ভৱেন্দ্ৰনাথ শইকীয়া আৰু অম্বিকা পদ দেৱ চৌধুৰীয়ে স্থাপন কৰা সঁফুৰা শিশুৰ বিকাশৰ বাবে সাহিত্য, ইতিহাস আৰু সৃষ্টিশীল প্ৰকাশৰ মাহেকীয়া আলোচনী হিচাপে আৰম্ভ হৈছিল।"
        )}
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-[280px_1fr] items-start">
        <figure className="rounded-3xl overflow-hidden border-4 border-gold shadow-[var(--shadow-soft)]">
          <img src={founderImg} alt="Dr. Bhabendranath Saikia" width={640} height={800} loading="lazy" className="w-full h-auto object-cover" />
          <figcaption className="bg-primary text-primary-foreground px-4 py-3 text-center text-sm">
            <div className="font-serif text-base">Dr. Bhabendranath Saikia</div>
            <div className="opacity-70 text-xs">{t("Founder · 1982", "প্ৰতিষ্ঠাপক · ১৯৮২")}</div>
          </figcaption>
        </figure>

        <div className="space-y-6 text-foreground/85">
          <p>{t(
            "SOFURA encourages children to write stories, poems and create illustrations, helping them develop cognitive and expressive abilities. A dedicated section invites young readers to ask questions on any topic — and the magazine strives to satisfy that curiosity.",
            "সঁফুৰাই শিশুসকলক গল্প, কবিতা লিখিবলৈ আৰু চিত্ৰ অংকন কৰিবলৈ উৎসাহিত কৰে, যাৰ ফলত সিহঁতৰ বৌদ্ধিক আৰু সৃষ্টিশীল ক্ষমতা বৃদ্ধি পায়।"
          )}</p>
          <p>{t(
            "Over four decades the trust expanded its mission to include the SOFURA Talent Discovery & Scholarship Examination — a state-level initiative for classes 2 to 9 that identifies academic talent across Assam and awards scholarships ranging from ₹500 to ₹20,000.",
            "চাৰি দশকত ট্ৰাষ্টে দ্বিতীয়ৰ পৰা নৱম শ্ৰেণীলৈকে অসমজুৰি প্ৰতিভা সন্ধান কৰা সঁফুৰা প্ৰতিভা সন্ধান আৰু বৃত্তি পৰীক্ষাও আৰম্ভ কৰে।"
          )}</p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { n: "40+", l: t("Years", "বছৰ") },
              { n: "1L+", l: t("Students", "ছাত্ৰ-ছাত্ৰী") },
              { n: "30+", l: t("Districts", "জিলা") },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-secondary/60 p-4 text-center">
                <div className="font-serif text-3xl font-bold text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
