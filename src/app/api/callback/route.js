// /app/api/callback/route.js
import { NextResponse } from 'next/server';
import querystring from 'querystring';

export async function GET(req) {
  const code = req.nextUrl.searchParams.get('code');
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  const basicAuth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'authorization_code',
      code,
      redirect_uri,
    }),
  });

  const data = await res.json();

  if (data.access_token) {
    const redirectUrl = new URL('/dashboard', req.nextUrl.origin);
    redirectUrl.searchParams.set('token', data.access_token);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.json({ error: 'Auth failed' });
}
