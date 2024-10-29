// src/app/page.js
"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Hello World</h1>
      <Link href="/todo">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Go to To-Do App
        </button>
      </Link>
    </div>
  );
}
