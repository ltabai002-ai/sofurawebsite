import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Facebook, Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/sofura_logo.png.asset.json";
import { LanguageProvider, useLang } from "./LanguageContext";

const NAV = [
  { to: "/", en: "Home", as: "ঘৰ" },
  { to: "/about", en: "About", as: "আমাৰ বিষয়ে" },
  { to: "/magazine", en: "Magazine", as: "আলোচনী" },
  { to: "/exam", en: "Scholarship Exam", as: "বৃত্তি পৰীক্ষা" },
  { to: "/gallery", en: "Gallery", as: "ছবিৰ চিত্ৰশালা" },
  { to: "/contact", en: "Contact", as: "যোগাযোগ" },
] as const;

function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="SOFURA" width={48} height={48} className="h-10 w-auto" />
          <div className="hidden sm:block">
            <div className="font-serif text-lg font-bold text-primary leading-none">SOFURA</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Educational Trust · 1982</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary [&.active]:bg-primary [&.active]:text-primary-foreground"
              activeProps={{ className: "active" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {t(n.en, n.as)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "as" : "en")}
            className="rounded-full border-2 border-gold bg-gold/10 px-3 py-1.5 text-xs font-bold text-primary hover:bg-gold/20 transition"
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
            <span className="mx-1 text-muted-foreground">|</span>
            <span className={lang === "as" ? "text-primary" : "text-muted-foreground"}>অস</span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-full p-2 hover:bg-secondary"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-4 py-3 space-y-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-secondary [&.active]:bg-primary [&.active]:text-primary-foreground"
              activeProps={{ className: "active" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {t(n.en, n.as)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="SOFURA" width={48} height={48} className="h-12 w-auto bg-white rounded-lg p-1" />
            <div>
              <div className="font-serif text-xl font-bold">SOFURA</div>
              <div className="text-xs opacity-75">Educational Trust · Since 1982</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 max-w-xs">
            {t(
              "A 40-year journey of literature and education in Assam.",
              "অসমত সাহিত্য আৰু শিক্ষাৰ ৪০ বছৰীয়া যাত্ৰা।"
            )}
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3 text-gold">{t("Explore", "অন্বেষণ")}</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {NAV.slice(1).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold transition">{t(n.en, n.as)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3 text-gold">{t("Contact", "যোগাযোগ")}</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> Guwahati, Assam, India</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> sofura.trust@gmail.com</li>
            <li className="flex items-start gap-2"><Facebook className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> facebook.com/sofura</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} SOFURA Educational Trust. All rights reserved.
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
