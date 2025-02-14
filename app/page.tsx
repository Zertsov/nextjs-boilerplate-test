"use client"
import { useState } from "react";
import { VERCEL_TARGET_ENV } from "./constants";

export default function Home() {
  const [count, setCount] = useState(0)
  // const testEnvVar = VERCEL_TARGET_ENV

  return (
    <>
      <h1>Vite + React + test + Vercel URL: {VERCEL_TARGET_ENV}</h1>
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
