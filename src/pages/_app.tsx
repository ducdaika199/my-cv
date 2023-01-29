import '../styles/global.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { darkTheme, lightTheme } from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{ light: lightTheme.className, dark: darkTheme.className }}
  >
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  </NextThemesProvider>
);

export default MyApp;
