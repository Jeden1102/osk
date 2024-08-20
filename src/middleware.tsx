import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware({
  locales: ["en", "pl"],

  localeDetection: false,

  defaultLocale: "pl",
});

export default middleware;

export const config = {
  matcher: ["/", "/(pl|en)/:page*"],
};
