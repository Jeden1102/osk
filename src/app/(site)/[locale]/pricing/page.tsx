import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is pricing page description",
};

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
