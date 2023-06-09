import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SWRConfig } from 'swr';


import { lightTheme } from '../themes';
import { UiProvider } from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // SWR config global
    <SWRConfig 
      value={{
        // refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      {/* UI provider  */}
      <UiProvider>
        {/* Material UI provider */}
        <ThemeProvider theme={ lightTheme }>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UiProvider>
    </SWRConfig>
  )
}
