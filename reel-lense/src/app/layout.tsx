import '@mantine/core/styles.css';

import { ColorSchemeScript,  MantineProvider,  mantineHtmlProps } from '@mantine/core';
import "./globals.css";
import NavBar from '@/components/nav-bar';

export const metadata = { 
  title: 'Reel Lense',
  description: 'A website for the Ginger GenAI product.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <MantineProvider theme={{ fontFamily: 'Arvo, sans-serif' }}>
          <NavBar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
