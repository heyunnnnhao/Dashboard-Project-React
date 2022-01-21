import Link from 'next/link';
import styles from 'styles/index.module.scss';
import { useTheme } from 'next-themes';
import { MongoClient } from 'mongodb';
import { useEffect } from 'react';
import { DBUrl } from 'utils/constants';

export default function Index({ DBUrl, isConnected, data }) {
  const { setTheme } = useTheme();

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <h1 className={styles.title}>
        <span className={styles.nextjs}>Next.js</span>
        &nbsp;
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

      {data.map((i) => {
        return (
          <div className={styles.repo}>
            <a href={i.html_url} target='_blank'>
              {i.name}
            </a>
          </div>
        );
      })}

      <div className={styles.colors}>
        {['primary', 'success', 'error', 'warning'].map((name) => {
          return <div className={styles[name]}>{name}</div>;
        })}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  let isConnected = false;

  const options = {};

  let client;

  try {
    client = new MongoClient(DBUrl, options);
    await client.connect();

    isConnected = true;
  } catch (error) {
    console.log(error);
  }

  const data = await client
    .db()
    .collection('github')
    .find({})
    .toArray()
    .then((res) => {
      return JSON.parse(JSON.stringify(res));
    });

  return {
    props: { DBUrl, isConnected, data },
  };
}
