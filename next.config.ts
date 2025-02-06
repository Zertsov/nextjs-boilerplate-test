import type { NextConfig } from "next";

console.log('NEXT CONFIG')
Object.keys(process.env)
  .filter(key => key.startsWith("VERCEL"))
  .forEach(key => console.log(`${key}: ${process.env[key]}`));

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
