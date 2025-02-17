import type { NextConfig } from "next";

console.log('NEXT CONFIG')
for (const key of Object.keys(process.env).filter(key => key.includes("ENV"))) {
  console.log(`${key}: ${process.env[key]}`)
}

const nextConfig: NextConfig = {

};

export default nextConfig;
