import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default ({ lang }: { lang: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const langs = [
    { lang: "en", fullName: "English", shortName: "EN" },
    { lang: "pl", fullName: "Polski", shortName: "PL" },
  ];

  function handleLangChange({ lang }: { lang: string }) {
    const segments = pathname.split("/").slice(2);
    const newPath = `/${lang}/${segments.join("/")}`;
    router.push(newPath);
  }

  return (
    <Select
      onValueChange={(val) => handleLangChange({ lang: val })}
      defaultValue={lang}
    >
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        {langs.map((lang) => (
          <SelectItem value={lang.lang}>{lang.fullName}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
