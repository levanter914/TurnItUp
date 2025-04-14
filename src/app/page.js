"use client";
import { WavyBackground } from "@/components/wavybackhround";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
      <h1 className="text-4xl font-bold mb-6 text-white">MoodifyAI 🎧</h1>
      <a
        href="/api/login"
        className="bg-white text-black px-6 py-3 rounded hover:bg-gray-300"
      >
        Login with Spotify
      </a>
      </WavyBackground>
    </main>
  );
}
