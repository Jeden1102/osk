import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleFaq from "@/components/Faq/SingleFaq";
import TextBlock from "@/components/TextBlock";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    title: t("Faq.title"),
  };
}

const FaqPage = ({ params }: any) => {
  const t = useTranslations("");
  const faqKeys = Object.keys(t.raw("Faq.questions"));
  return (
    <>
      <Breadcrumb pageName={t("Faq.title")} />
      <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-gray-900  lg:pb-[50px] lg:pt-[120px]">
        <div className="container">
          <SectionTitle
            subtitle={t("Faq.sectionTitle.subtitle")}
            title={t("Faq.sectionTitle.title")}
            paragraph={t("Faq.sectionTitle.paragraph")}
            width="640px"
            center
          />
          <div className="-mx-4 mt-[60px] grid grid-cols-1 gap-8 lg:mt-20 px-2">
            <Tabs defaultValue="admin" className="w-full mt-4">
              <TabsList className="mx-auto">
                <TabsTrigger value="admin">
                  {t("Features.for_admin")}
                </TabsTrigger>
                <TabsTrigger value="instructor">
                  {t("Features.for_instructor")}
                </TabsTrigger>
                <TabsTrigger value="student">
                  {t("Features.for_student")}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="admin">
                <div className="-mx-4 mt-12 grid md:grid-cols-2 lg:grid-cols-3  lg:mt-20 gap-4">
                  {new Array(6).fill("").map((_, idx) => (
                    <SingleFaq
                      key={idx}
                      question={t(`Faq.questions.question_${idx + 1}.question`)}
                      answer={t(`Faq.questions.question_${idx + 1}.answer`)}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="instructor">
                <div className="-mx-4 mt-12 grid md:grid-cols-2 lg:grid-cols-3  lg:mt-20 gap-4">
                  {new Array(6).fill("").map((_, idx) => (
                    <SingleFaq
                    key={idx}
                      question={t(`Faq.questions.question_${idx + 7}.question`)}
                      answer={t(`Faq.questions.question_${idx + 7}.answer`)}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="student">
                <div className="-mx-4 mt-12 grid md:grid-cols-2 lg:grid-cols-3  lg:mt-20 gap-4">
                  {new Array(6).fill("").map((_, idx) => (
                    <SingleFaq
                      key={idx}
                      question={t(
                        `Faq.questions.question_${idx + 13}.question`
                      )}
                      answer={t(`Faq.questions.question_${idx + 13}.answer`)}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
