import { useParams } from "next/navigation";
export function useLang() {
  const params = useParams();
  const lang = params.lang;
  return { lang };
}

export function useLangClient() {
  const pathname = window.location.pathname;
  const segments = pathname.split("/");
  const lang = segments[1];

  return { lang };
}
