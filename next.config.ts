import type { NextConfig } from "next";

console.log('NEXT CONFIG')
for (const key of Object.keys(process.env).filter(key => key.startsWith("VERCEL"))) {
  console.log(`${key}: ${process.env[key]}`)
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
