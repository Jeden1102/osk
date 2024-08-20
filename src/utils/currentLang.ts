import { usePathname } from "next/navigation";

export default function currentLang() {
  const pathName = usePathname();
  return pathName.split("/")?.[1] ?? "en";
}
