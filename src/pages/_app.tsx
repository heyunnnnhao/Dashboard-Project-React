import 'styles/base.scss';
import 'styles/reset.scss';
import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider storageKey='nextTheme'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
