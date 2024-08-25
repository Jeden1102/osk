import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const HomeBlogSection = ({ posts }: any) => {
  const t = useTranslations();
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-gray-900  lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle={t('Home.blog.title')}
            title={t('Home.blog.subtitle')}
            paragraph=""
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          {posts.slice(0, 3).map((blog: any, i: number) => (
            <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
