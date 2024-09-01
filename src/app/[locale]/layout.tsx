import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "../../styles/index.css";
import "../../styles/prism-vsc-dark-plus.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import NextTopLoader from 'nextjs-toploader';

interface RootLayoutProps {
  children: React.ReactNode;
  locale: never;
}

export const metadata: Metadata = {
  title: {
    template: "%s | MojeJazdy",
    default: "MojeJazdy",
  },
};

export default async function RootLayout({
  children,
  locale,
}: RootLayoutProps) {
  const messages = await getMessages();
  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <NextTopLoader height={4} color="#2a9d8f" showSpinner={false}/>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
