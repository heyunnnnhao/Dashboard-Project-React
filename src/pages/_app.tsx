import 'styles/base.scss';
import 'styles/reset.scss';
import { ThemeProvider } from 'next-themes';
import { Layout } from 'src/components';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider storageKey='nextTheme'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
