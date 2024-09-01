import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  const t = useTranslations();
  const faqKeys = [1, 2, 7, 8, 13, 14];
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-gray-900  lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle={t("Faq.sectionTitle.subtitle")}
          title={t("Faq.sectionTitle.title")}
          paragraph={t("Faq.sectionTitle.paragraph")}
          width="640px"
          center
        />
        <div className="-mx-4 mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-20">
          {faqKeys.map((faqKey) => (
            <SingleFaq
              key={faqKey}
              question={t(`Faq.questions.question_${faqKey}.question`)}
              answer={t(`Faq.questions.question_${faqKey}.answer`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
