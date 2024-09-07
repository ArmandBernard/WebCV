/** @type {import('next').NextConfig} */
import baseUrl from "./baseUrl.js";

const nextConfig = {
  reactStrictMode: true,
  distDir: `dist${baseUrl}`,
  output: "export",
  basePath: baseUrl,
};

export default nextConfig;
