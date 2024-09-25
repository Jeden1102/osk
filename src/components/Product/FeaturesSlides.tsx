import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";

function FeaturesSlides() {
  const t = useTranslations();

  return (
    <Tabs defaultValue="admin" className="w-full mt-4">
      <TabsList className="mx-auto">
        <TabsTrigger value="admin">{t("Features.for_admin")}</TabsTrigger>
        <TabsTrigger value="instructor">
          {t("Features.for_instructor")}
        </TabsTrigger>
        <TabsTrigger value="student">{t("Features.for_student")}</TabsTrigger>
      </TabsList>
      <TabsContent value="admin">
        <div className="-mx-4 mt-12 grid md:grid-cols-2 lg:grid-cols-3  lg:mt-20 gap-4">
          admin
          {/* @todo slides lookalike- > https://volta.net/ */}
        </div>
      </TabsContent>
      <TabsContent value="instructor">
        <div className="-mx-4 mt-12 grid md:grid-cols-2 lg:grid-cols-3  lg:mt-20 gap-4">
          instructor
        </div>
      </TabsContent>
      <TabsContent value="student">
        <div className="-mx-4 mt-12 grid md:grid-cols-2 lg:grid-cols-3  lg:mt-20 gap-4">
          student
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default FeaturesSlides;
