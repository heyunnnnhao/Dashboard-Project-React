import Link from 'next/link';
import styles from 'styles/index.module.scss';
import { useTheme } from 'next-themes';

export default function Index({ dburl, isConnected }) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <h1 className={styles.title}>
        <span className={styles.nextjs}>Next.js&nbsp;</span>
        <span className={styles.mongodb}>MongoDB</span>
      </h1>
      <div>
        The current theme is: {theme}
        <button onClick={() => setTheme('light')} className={styles.button}>
          Light Mode
        </button>
        <button onClick={() => setTheme('dark')} className={styles.button}>
          Dark Mode
        </button>
      </div>
      <p>
        The Database <span className={isConnected ? styles.db : styles.dbfailed}>{isConnected ? 'is' : 'is not'}</span> connected at {dburl || ''}
      </p>
    </>
  );
}

export async function getServerSideProps(context) {
  let isConnected;

  try {
    await clientPromise;
    isConnected = true;
  } catch (e) {
    console.error(e);
    isConnected = false;
  }

  return {
    props: { dburl: process.env.MONGODB_URI, isConnected },
  };
}
