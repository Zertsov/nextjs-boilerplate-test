import type { NextConfig } from "next";

console.log('NEXT CONFIG')
console.log('-----------')
console.log()

const filter = (key: string) => (key.startsWith("NEXT_PUBLIC") || key.startsWith("VERCEL")) 
for (const key of Object.keys(process.env).filter(filter)) {
  console.log(`${key}: ${process.env[key]}`)
}

const nextConfig: NextConfig = {
  async rewrites() {
    return []
    // return [
    //   {
    //     source: '/',
    //     destination: 'https://www.google.com'
    //   }
    // ]
  }
};

export default nextConfig;
