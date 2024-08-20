import { useTranslations } from "next-intl";
import Header from "./Header";
import menuData from "./menuData";

function NavigationWrapper() {
  const t = useTranslations();

  menuData.map((item) => (item.title = t(`Navigation.${item.title}`)));

  return <Header menuData={menuData} />;
}

export default NavigationWrapper;
