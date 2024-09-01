import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
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
    title: t("Contact.title"),
  };
}


const ContactPage = async ({ params }: any) => {
  const { locale } = params;
  const t = await getTranslations({ locale });
  return (
    <>
      <Breadcrumb pageName={t('Contact.title')} />

      <Contact />
    </>
  );
};

export default ContactPage;
