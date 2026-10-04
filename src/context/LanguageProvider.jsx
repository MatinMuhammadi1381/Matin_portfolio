import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./language-context";

const pageMetadata = {
  en: {
    title: "Matin Mohammadi, Frontend Developer",
    description:
      "Portfolio of Matin Mohammadi, a frontend developer building thoughtful web experiences and real-world applications.",
  },
  fa: {
    title: "متین محمدی — توسعه‌دهندهٔ فرانت‌اند",
    description:
      "نمونه‌کارهای متین محمدی، توسعه‌دهندهٔ فرانت‌اند؛ سازندهٔ تجربه‌های وب و برنامه‌های کاربردی واقعی.",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() =>
    localStorage.getItem("portfolio-language") === "fa" ? "fa" : "en"
  );

  useEffect(() => {
    const isPersian = language === "fa";
    const metadata = pageMetadata[language];

    document.documentElement.lang = language;
    document.documentElement.dir = isPersian ? "rtl" : "ltr";
    document.documentElement.dataset.language = language;
    document.title = metadata.title;
    localStorage.setItem("portfolio-language", language);

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", metadata.description);

    const openGraphTitle = document.querySelector(
      'meta[property="og:title"]'
    );
    openGraphTitle?.setAttribute("content", metadata.title);

    const openGraphDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    openGraphDescription?.setAttribute("content", metadata.description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    twitterTitle?.setAttribute("content", metadata.title);

    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    twitterDescription?.setAttribute("content", metadata.description);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isPersian: language === "fa",
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
