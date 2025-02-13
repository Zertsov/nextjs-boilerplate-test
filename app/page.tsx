"use client"
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  const vcURL = process.env.NEXT_PUBLIC_VERCEL_URL

  return (
    <>
      <h1>Vite + React + Vercel URL: {vcURL}</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app/page.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}
