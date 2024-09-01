import Breadcrumb from "@/components/Common/Breadcrumb";
import TextBlock from "@/components/TextBlock";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

interface Params {
  locale: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale });

  return {
    title: t("PrivacyPolicy.title"),
  };
}

const PrivacyPolicyPage = ({ params }: any) => {
  const t = useTranslations("");
  return (
    <>
      <Breadcrumb pageName={t("PrivacyPolicy.title")} />
      <TextBlock>Sample text</TextBlock>
    </>
  );
};

export default PrivacyPolicyPage;
