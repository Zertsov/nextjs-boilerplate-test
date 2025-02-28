"use client"
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  const testEnvVar = process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_ID;
  const confirmedEnvVar = process.env.NEXT_PUBLIC_VERCEL_ENV;

  return (
    <>
      <h1>Testing env var: {testEnvVar}</h1>
      <h1>Good env var: {confirmedEnvVar}</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}
