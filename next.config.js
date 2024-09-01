/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

const nextConfig = {
};

module.exports = withPWA(withNextIntl(nextConfig));
