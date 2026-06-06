import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Feather, Languages, MessageCircle } from "lucide-react";
import magazineImg from "@/assets/magazine-cover.jpg";
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

function Magazine() {
  const { t } = useLang();
  return (
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
            <Feature icon={<Feather />} label={t("Stories & Poems", "গল্প আৰু কবিতা")} />
            <Feature icon={<Languages />} label={t("Phuloni Translations", "ফুলনি অনুবাদ")} />
            <Feature icon={<BookOpen />} label={t("World Literature", "বিশ্ব সাহিত্য")} />
            <Feature icon={<MessageCircle />} label={t("Reader Questions", "পাঠকৰ প্ৰশ্ন")} />
          </div>
          <button className="mt-8 rounded-2xl bg-gold px-7 py-3.5 font-semibold text-gold-foreground hover:opacity-90 shadow-[var(--shadow-soft)]">
            {t("Subscribe Annually — ₹500", "বছৰি চাবস্ক্ৰাইব — ₹৫০০")}
          </button>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
      <div className="rounded-xl bg-primary/10 p-2 text-primary [&_svg]:h-5 [&_svg]:w-5">{icon}</div>
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
}
