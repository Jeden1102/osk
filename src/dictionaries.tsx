const dictionaries: any = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  pl: () => import("./dictionaries/pl.json").then((module) => module.default),
};
export const getDictionary = async (locale: any) =>
  dictionaries[locale]?.() ?? dictionaries["en"];
