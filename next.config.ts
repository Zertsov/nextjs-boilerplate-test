import type { NextConfig } from "next";

console.log('NEXT CONFIG')
for (const key of Object.keys(process.env).filter(key => key.startsWith("VERCEL"))) {
  console.log(`${key}: ${process.env[key]}`)
}

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_VERCEL_TARGET_ENV: process.env.VERCEL_TARGET_ENV
  }
};

export default nextConfig;
