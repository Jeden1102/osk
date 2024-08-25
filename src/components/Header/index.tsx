import { useTranslations } from "next-intl";
import Header from "./Header";
import menuData from "./menuData";

function NavigationWrapper() {
  const t = useTranslations();

  const updatedMenuData = menuData.map(item => ({
    ...item,
    title: t(`Navigation.${item.title}`)
  }));

  return <Header menuData={updatedMenuData} />;
}

export default NavigationWrapper;
