import Link from 'next/link';
import styles from 'styles/index.module.scss';
import { useTheme } from 'next-themes';
import { MongoClient } from 'mongodb';

export default function Index({ DBUrl, isConnected, data }) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <h1 className={styles.title}>
        <span className={styles.nextjs}>Next.js</span>
        <span className={styles.cross}>&emsp;{/*&#10005;&emsp;*/}</span>
        <span className={styles.mongodb}>MongoDB</span>
      </h1>
      <div className={styles.buttons}>
        <button onClick={() => setTheme('light')} className={styles.button}>
          Light Mode
        </button>
        <button onClick={() => setTheme('dark')} className={styles.button}>
          Dark Mode
        </button>
      </div>
      <p className={styles.dbindicator}>
        The Database
        <span className={isConnected ? styles.db : styles.dbfailed}>{isConnected ? ' is ' : ' is not '}</span>
        connected at&nbsp;
        <span className={styles.dburl}>{DBUrl || ''}</span>
      </p>

      <p>{data.length || 'null'}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  let isConnected = false;

  const DBUrl = process.env.MONGODB_URI;

  const options = {};

  let client;
  let clientPromise;

  if (!DBUrl) {
    throw new Error('Please add your Mongo URI to .env.local');
  }

  try {
    client = new MongoClient(DBUrl, options);
    await client.connect();

    isConnected = true;
  } catch (error) {}

  const data = await client.db().collection('test').find({});
  console.log(data);
  return {
    props: { DBUrl, isConnected, data },
  };
}
