import { NextResponse } from 'next/server';

export async function GET() {
  const scope = 'playlist-modify-public user-read-private user-read-email';
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
  const client_id = process.env.SPOTIFY_CLIENT_ID;

  const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${encodeURIComponent(
    scope
  )}&redirect_uri=${encodeURIComponent(redirect_uri)}`;

  return NextResponse.redirect(url);
}
