import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

export default ({ lang }: { lang: string }) => {
  const currentLanguage = lang;
  const router = useRouter();
  const pathname = usePathname(); // Zwraca aktualną ścieżkę URL, np. '/en/test'
  const langs = [
    { lang: "en", fullName: "English", shortName: "EN" },
    { lang: "pl", fullName: "Polski", shortName: "PL" },
  ];

  function handleLangChange({ lang }: { lang: string }) {
    const segments = pathname.split("/").slice(2); // Zwraca wszystkie segmenty po aktualnym języku, np. ['test']
    const newPath = `/${lang}/${segments.join("/")}`; // Buduje nową ścieżkę z nowym językiem
    router.push(newPath);
  }

  return (
    <select
      value={currentLanguage}
      onChange={(e) => handleLangChange({ lang: e.target.value, fullName: "" })}
    >
      {langs.map((lang) => (
        <option key={lang.lang} value={lang.lang}>
          {lang.fullName}
        </option>
      ))}
    </select>
  );
};
