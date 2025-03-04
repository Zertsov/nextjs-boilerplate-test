import type { NextConfig } from "next";

console.log('-----------')
console.log('NEXT CONFIG')
console.log('-----------')
console.log()

const filter = (key: string) => (key.startsWith("NEXT_PUBLIC") || key.startsWith("VERCEL")) 
for (const key of Object.keys(process.env).filter(filter)) {
  console.log(`${key}: ${process.env[key]}`)
}

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // This will rewrite the base path to Youtube
        // {
        //   source: '/',
        //   destination: 'https://www.youtube.com'
        // }
      ],
      afterFiles: [],
      fallback: []
    }
  }
};

export default nextConfig;
