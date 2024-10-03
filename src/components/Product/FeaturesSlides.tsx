import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import AnimatedTabs from "./AnimatedTabs";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiCarSimpleLight } from "react-icons/pi";
import { IoStatsChartOutline } from "react-icons/io5";

function FeaturesSlides() {
  const t = useTranslations();

  const tabs = {
    admin: [
      {
        title: "Test title 1",
        description: "test descirption",
        icon: <HiOutlineUsers />,
        image: "/images/blog/blog-01.jpg",
      },
      {
        title: "Test title 2",
        description: "test descirption",
        icon: <PiCarSimpleLight />,
        image: "/images/blog/blog-02.jpg",
      },
      {
        title: "Test title 3",
        description: "test descirption",
        icon: <IoStatsChartOutline />,
        image: "/images/blog/blog-03.jpg",
      },
    ],
  };

  return (
    <Tabs defaultValue="admin" className="w-full my-8">
      <TabsList className="mx-auto" data-aos="fade-in">
        <TabsTrigger value="admin">{t("Features.for_admin")}</TabsTrigger>
        <TabsTrigger value="instructor">
          {t("Features.for_instructor")}
        </TabsTrigger>
        <TabsTrigger value="student">{t("Features.for_student")}</TabsTrigger>
      </TabsList>
      <TabsContent value="admin">
        <div className="-mx-4 mt-12 lg:mt-20">
          <AnimatedTabs tabs={tabs.admin} />
        </div>
      </TabsContent>
      <TabsContent value="instructor">
        <div className="-mx-4 mt-12 lg:mt-20">instructor</div>
      </TabsContent>
      <TabsContent value="student">
        <div className="-mx-4 mt-12 lg:mt-20">student</div>
      </TabsContent>
    </Tabs>
  );
}

export default FeaturesSlides;
