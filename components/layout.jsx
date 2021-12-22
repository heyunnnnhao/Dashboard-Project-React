import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <title>Layouts Example</title>
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app' target='_blank' rel='noopener noreferrer'>
          Powered by&nbsp;
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
