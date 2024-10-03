import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Features = () => {
  const t = useTranslations();
  return (
    <section className="pb-8 pt-20 dark:bg-gray-900  lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle={t("Features.title")}
          title={t("Features.subtitle")}
          paragraph={t("Features.desc")}
        />

        <Tabs defaultValue="admin" className="w-full mt-4" data-aos="fade-up">
          <TabsList>
            <TabsTrigger value="admin">{t("Features.for_admin")}</TabsTrigger>
            <TabsTrigger value="instructor">
              {t("Features.for_instructor")}
            </TabsTrigger>
            <TabsTrigger value="student">
              {t("Features.for_student")}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="admin">
            <div className="-mx-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuresData.admin.map((feature, i) => (
                <SingleFeature
                  key={i}
                  feature={feature}
                  featureKey="admin"
                  index={i}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="instructor">
            <div className="-mx-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuresData.instructor.map((feature, i) => (
                <SingleFeature
                  key={i}
                  feature={feature}
                  featureKey="instructor"
                  index={i}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="student">
            <div className="-mx-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuresData.student.map((feature, i) => (
                <SingleFeature
                  key={i}
                  feature={feature}
                  featureKey="student"
                  index={i}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Features;
