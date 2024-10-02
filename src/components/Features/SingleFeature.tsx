import { Feature } from "@/types/feature";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Card, CardContent } from "../ui/card";

const SingleFeature = ({
  feature,
  featureKey,
  index,
}: {
  feature: Feature;
  featureKey: string;
  index: number;
}) => {
  const t = useTranslations();
  const { icon, btn, btnLink } = feature;
  return (
    <Card
      className="w-full py-6"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <CardContent className="py-0">
        <div
          className="wow fadeInUp group h-full flex flex-col"
          data-wow-delay=".15s"
        >
          <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-gradient bg-gradient-to-br from-primary to-secondary">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
            {t(`Features.${featureKey}.feature_${index + 1}.title`)}
          </h3>
          <p className="text-body-color dark:text-dark-6 lg:mb-4">
            {t(`Features.${featureKey}.feature_${index + 1}.desc`)}
          </p>
          <Link
            href={btnLink}
            className="text-base mt-auto pt-2 font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {t("Common.know_more")}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleFeature;
