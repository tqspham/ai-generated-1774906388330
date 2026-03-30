```tsx
"use client";

import { useState } from 'react';
import { Head } from 'next/document';

export default function HomePage() {
  const [message] = useState("Hello, World!");

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the homepage" />
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold">{message}</h1>
      </main>
    </>
  );
}
```