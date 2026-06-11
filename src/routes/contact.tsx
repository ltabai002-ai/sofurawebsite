import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, GraduationCap, ExternalLink, PenLine } from "lucide-react";
import { z } from "zod";
import { useLang } from "@/components/LanguageContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SOFURA Educational Trust" },
      { name: "description", content: "Get in touch with the SOFURA Educational Trust, Guwahati, Assam." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
  message: z.string().trim().min(10, "Message too short").max(1000),
});

function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">{t("Get in Touch", "যোগাযোগ")}</span>
        <h1 className="mt-2 font-serif text-5xl font-bold text-primary md:text-6xl">{t("Write to SOFURA", "সঁফুৰালৈ লিখক")}</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          {t("To write to the magazine or for any other queries, contact us.", "আলোচনীলৈ লিখিবলৈ অথবা আন যিকোনো প্ৰশ্নৰ বাবে আমাৰ সৈতে যোগাযোগ কৰক।")}
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-4">
          <Info icon={<MapPin />} title={t("Office", "কাৰ্যালয়")} value="Guwahati, Assam, India" />
          <Info icon={<Mail />} title={t("Email", "ইমেইল")} value="sofura.trust@gmail.com" />
          <Info icon={<Phone />} title={t("Phone", "ফোন")} value="+91 98640 00000" />
        </aside>

        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)] space-y-4">
          {sent && (
            <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              <CheckCircle2 className="h-5 w-5" /> {t("Message sent! We'll reply soon.", "বাৰ্তা পঠিওৱা হ’ল!")}
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label={t("Name", "নাম")} value={form.name} error={errors.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Field name="email" label={t("Email", "ইমেইল")} value={form.email} error={errors.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
          </div>
          <Field name="phone" label={t("Phone", "ফোন")} value={form.phone} error={errors.phone} onChange={(v) => setForm({ ...form, phone: v })} />
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t("Message", "বাৰ্তা")}</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              maxLength={1000}
              className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90 shadow-[var(--shadow-soft)]">
            <Send className="h-4 w-4" /> {t("Send Message", "বাৰ্তা পঠিয়াওক")}
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-4 lg:col-span-2">
          <a
            href="https://forms.gle/EuSqd3TMgieiuXMXA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-[#FFD93D] bg-white px-8 py-4 font-bold text-[#1A2A5E] shadow-lg transition hover:border-[#FF9F45] hover:bg-[#FFF8E7] hover:shadow-xl"
          >
            <PenLine className="h-6 w-6 text-[#FF9F45]" />
            <span className="text-lg">{t("Submit Your Work", "আপোনাৰ কাম দাখিল কৰক")}</span>
            <ExternalLink className="h-5 w-5 text-[#FF9F45]" />
          </a>
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
    </div>
  );
}

function Info({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-3">
      <div className="rounded-xl bg-gold/15 p-2.5 text-primary [&_svg]:h-5 [&_svg]:w-5">{icon}</div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-0.5 font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}

function Field({ name, label, value, onChange, error, type = "text" }: { name: string; label: string; value: string; onChange: (v: string) => void; error?: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
