import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale });

  return {
    title: t("Pricing.hero.title"),
  };
}

const PricingPage = ({ params }: any) => {
  const t = useTranslations("Pricing");
  return (
    <>
      <Breadcrumb pageName={t("hero.title")} />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
