import { useEffect, useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

//importing theme file
import { MANTINE_THEME } from '@/themes/Mantine/theme';
import '@/themes/Mantine/WebFonts/stylesheet.css';

//setting up store
import { i18nx } from '../i18n';
import { RootStore, RootStoreProvider, setupRootStore } from '@/models';
import { GoogleOAuthProvider } from '@react-oauth/google';
export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'dark' : 'light');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };
  let currentTheme = MANTINE_THEME;
  currentTheme.colorScheme;

  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setupRootStore().then(setRootStore);
    })();
  }, []);
  if (!rootStore) return null;
  if (rootStore.i18nStore.appLanguage) i18nx.locale = rootStore.i18nStore.appLanguage;
  else {
    rootStore.i18nStore.setSystemDefault();
  }
  if (rootStore.i18nStore.appLanguage) i18nx.locale = rootStore.i18nStore.appLanguage;
  else {
    rootStore.i18nStore.setSystemDefault();
  }

  let googleOAuthProviderClientId =
    '115727969785-dr3gd9rpagos187jq3mg8gphbe3hb0ds.apps.googleusercontent.com';

  return (
    <div dir={rootStore.i18nStore.isRTL ? 'rtl' : 'ltr'}>
      <GoogleOAuthProvider clientId={googleOAuthProviderClientId}>
        <RootStoreProvider value={rootStore}>
          <Head>
            <title>Krishna Content Marketing</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <link rel="shortcut icon" href="/favicon.svg" />
            <link rel="canonical" href="https://ikana.io/services/content-marketing/" />
            <meta
              name="description"
              title="Krishna Team for Content Marketing"
              content="The Content Marketing Team that Delivers Share your brand story with the help of our experts who deliver engaging content to the right people"
            />
          </Head>

          <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
              theme={{
                ...currentTheme,
                colorScheme,
                globalStyles: (theme) => ({
                  '.cursor': {
                    cursor: 'pointer',
                  },
                  '.borderRadius': {
                    borderRadius: '20px',
                  },
                  '.textDecoration': {
                    textDecoration: 'none',
                  },
                }),
              }}
              withGlobalStyles
              withNormalizeCSS
              withCSSVariables
            >
              <Component {...pageProps} />
              <Notifications />
            </MantineProvider>
          </ColorSchemeProvider>
        </RootStoreProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'light',
  };
};
