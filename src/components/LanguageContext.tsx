import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "as";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (en: string, as: string) => string };

const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (en) => en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (en: string, as: string) => (lang === "en" ? en : as);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
