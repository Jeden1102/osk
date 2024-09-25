import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import { Bento } from "@/components/Product/Bento";
import FeaturesSlides from "@/components/Product/FeaturesSlides";
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
    <div className="overflow-x-hidden container">
      <Breadcrumb pageName={t("Product.title")} />
      <Bento />
      <SectionTitle
        subtitle="Jak to dziala"
        title="Jak wyglada korzystanie z naszego produktu?"
        paragraph=""
        width="640px"
        center
      />
      <FeaturesSlides />
    </div>
  );
};

export default ProductPage;
