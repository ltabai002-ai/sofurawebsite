import { createFileRoute } from "@tanstack/react-router";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import { useLang } from "@/components/LanguageContext";

export const Route = createFileRoute("/press-release")({
  head: () => ({
    meta: [
      { title: "Press Release — SOFURA Educational Trust" },
      { name: "description", content: "Latest press releases, announcements and updates from SOFURA Educational Trust, Assam." },
    ],
  }),
  component: PressRelease,
});

const ARTICLES: {
  titleEn: string; titleAs: string; date: string; excerptEn: string; excerptAs: string;
}[] = [];

function PressRelease() {
  const { t } = useLang();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
          <Newspaper className="h-4 w-4" /> {t("Press Release", "প্ৰেছ বিজ্ঞপ্তি")}
        </span>
        <h1 className="mt-2 font-serif text-5xl font-bold text-primary md:text-6xl">
          {t("Press Release", "প্ৰেছ বিজ্ঞপ্তি")}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          {t(
            "Latest announcements, articles and updates from SOFURA Educational Trust.",
            "ছফুৰা এডুকেশ্যনেল ট্ৰাষ্টৰ পৰা সাম্প্ৰতিক ঘোষণা, প্ৰবন্ধ আৰু আপডেট।"
          )}
        </p>
      </div>

      {ARTICLES.length === 0 ? (
        <div className="mt-20 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
            <Newspaper className="h-10 w-10 text-gold" />
          </div>
          <h2 className="mt-6 font-serif text-2xl font-bold text-primary">
            {t("No articles yet", "এতিয়ালৈকে কোনো প্ৰবন্ধ নাই")}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            {t(
              "Articles and press releases will be published here soon. Please check back later.",
              "প্ৰবন্ধ আৰু প্ৰেছ বিজ্ঞপ্তি সোনকালে ইয়াত প্ৰকাশ কৰা হ'ব। অনুগ্ৰহ কৰি পিছত চাওক।"
            )}
          </p>
        </div>
      ) : (
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <article
              key={i}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <h3 className="mt-3 font-serif text-xl font-bold text-primary group-hover:text-gold transition-colors">
                {t(article.titleEn, article.titleAs)}
              </h3>
              <p className="mt-2 text-muted-foreground">{t(article.excerptEn, article.excerptAs)}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold transition hover:gap-2">
                {t("Read More", "আৰু পঢ়ক")} <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
