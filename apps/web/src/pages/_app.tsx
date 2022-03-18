import '@/styles/globals.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { AppProviders } from '@/app/app-providers';
import { siteConfig } from '@/lib/site-config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        {/* Use minimum-scale=1 to enable GPU rasterization */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </>
  );
}

export default MyApp;
