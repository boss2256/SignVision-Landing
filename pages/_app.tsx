// pages/_app.tsx
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import '../app/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default MyApp;
