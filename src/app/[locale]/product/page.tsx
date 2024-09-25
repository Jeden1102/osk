import Breadcrumb from "@/components/Common/Breadcrumb";
import { Bento } from "@/components/Product/Bento";
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
    title: t("Product.title"),
  };
}

const ProductPage = ({ params }: any) => {
  const t = useTranslations("");
  return (
    <>
      <Breadcrumb pageName={t("Product.title")} />
      <Bento />
    </>
  );
};

export default ProductPage;
