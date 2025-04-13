export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">MoodifyAI 🎧</h1>
      <a
        href="/api/login"
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
      >
        Login with Spotify
      </a>
    </main>
  );
}
