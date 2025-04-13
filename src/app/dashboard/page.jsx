'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Suspense } from 'react';

export default function Dashboard() {
    const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [playlistName, setPlaylistName] = useState('');
  const [status, setStatus] = useState('');

  const handleCreate = async () => {
    if (!token) return;

    const userRes = await fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const userData = await userRes.json();
    const userId = userData.id;

    const playlistRes = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: playlistName,
          public: true,
        }),
      }
    );

    const playlistData = await playlistRes.json();
    setStatus(`Created: ${playlistData.name}`);
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Create Playlist</h1>
      <input
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        className="border px-4 py-2 w-full"
        placeholder="Enter playlist name"
      />
      <button
        onClick={handleCreate}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Create
      </button>
      {status && <p>{status}</p>}
    </div>
    </Suspense>
  );
}


export default function Dashboard() {
  

  return (

    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Create Playlist</h1>
      <input
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        className="border px-4 py-2 w-full"
        placeholder="Enter playlist name"
      />
      <button
        onClick={handleCreate}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Create
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}
