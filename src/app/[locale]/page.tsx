import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

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
    title: t("Home.metadata.title"),
    description: t("Home.metadata.description"),
  };
}

export default function Home({ params }: any) {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const t = useTranslations("Home");
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Faq />
      <HomeBlogSection posts={posts} />
      <Contact />
    </main>
  );
}
