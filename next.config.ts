import type { NextConfig } from "next";

console.log('NEXT CONFIG')
for (const key of Object.keys(process.env).filter(key => key.startsWith("VERCEL") || key.startsWith("NEXT_PUBLIC"))) {
  console.log(`${key}: ${process.env[key]}`)
}

const nextConfig: NextConfig = {

};

export default nextConfig;
