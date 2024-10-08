import Image from "next/image";
import { Button } from "../ui/button";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations();
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2
                  className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]"
                  data-aos="fade-up"
                >
                  {t("Home.about.title")}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6"
                >
                  {t("Home.about.description")}
                </p>

                <Button
                  asChild
                  size="lg"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <Link href="/#">{t("Common.know_more")}</Link>
                </Button>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
                  >
                    <Image
                      src="/images/about/about-image-01.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center"
                      data-aos="zoom-in"
                      data-aos-delay="250"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <Image
                      src="/images/about/about-image-02.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center"
                      data-aos="zoom-in"
                      data-aos-delay="350"
                    />
                  </div>

                  <div
                    data-aos="zoom-in"
                    data-aos-delay="450"
                    className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-gradient bg-gradient-to-tr from-primary to-secondary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8"
                  >
                    <div>
                      <span className="block text-5xl font-extrabold text-white">
                        &infin;
                      </span>
                      <span className="block text-base font-semibold text-white">
                        {t("Home.about.unlimited")}
                      </span>
                      <span className="block text-base font-medium text-white text-opacity-70">
                        {t("Home.about.set")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
