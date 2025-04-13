import "./globals.css";


export const metadata = {
  title: "Turn It Up",
  description: "Generates Spotify Playlists Based on your Mood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
