import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

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
    title: t("Demo.title"),
  };
}

const DemoPage = ({ params }: any) => {
  const t = useTranslations("");
  return (
    <>
      <Breadcrumb pageName={t("Demo.title")} />
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              {t("Home.hero.description")}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row lg:mt-12">
            <Button asChild size="lg">
              <Link
                href="https://osk-admin.vercel.app?demo=admin"
                className="flex gap-3"
              >
                <RiAdminLine fontSize="20" />
                {t("Features.for_admin")}
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link
                href="https://osk-admin.vercel.app?demo=instructor"
                className="flex gap-3"
              >
                <FaChalkboardTeacher fontSize="20" />
                {t("Features.for_instructor")}
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link
                href="https://osk-admin.vercel.app?demo=student"
                className="flex gap-3"
              >
                <PiStudentFill fontSize="20" />
                {t("Features.for_student")}
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-base text-center text-gray-600">
            {t("Demo.legal")}
          </p>
        </div>
      </section>
    </>
  );
};

export default DemoPage;
