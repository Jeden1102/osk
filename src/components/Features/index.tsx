import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-gray-900  lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Features"
          title="Main Features Of Play"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />

        <Tabs defaultValue="admin" className="w-full mt-4">
          <TabsList>
            <TabsTrigger value="admin">For admin</TabsTrigger>
            <TabsTrigger value="instructor">For instructor</TabsTrigger>
            <TabsTrigger value="student">For student</TabsTrigger>
          </TabsList>
          <TabsContent value="admin">
            <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
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
            <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
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
            <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
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
