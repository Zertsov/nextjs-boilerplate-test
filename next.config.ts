import type { NextConfig } from "next";

console.log('NEXT CONFIG')

const filter = (key: string) => (key.startsWith("NEXT_PUBLIC") || key.startsWith("VERCEL")) && key.includes("ENV")
for (const key of Object.keys(process.env).filter(filter)) {
  console.log(`${key}: ${process.env[key]}`)
}

const nextConfig: NextConfig = {

};

export default nextConfig;
