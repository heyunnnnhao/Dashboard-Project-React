import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { MongoClient } from 'mongodb';
import { DBUrl } from 'utils/constants';
import { getUserStarredRepos, getGithubUserInfo, getGithubApiLimit } from 'lib/github';
import styles from 'styles/index.module.scss';

export default function Index({ DBUrl, isConnected, data }) {
  const { setTheme } = useTheme();
  const [limit, setLimit] = useState();

  useEffect(() => {
    (async (): Promise<any> => {
      const res = await getUserStarredRepos('heyunnnnhao');
      const remain: any = await getGithubApiLimit();
      setLimit(remain.data.remaining);
    })();
  }, []);

  return (
    <>
      <h1 className={styles.title}>
        <span className={styles.nextjs}>Next.js</span>
        &nbsp;
        <span className={styles.mongodb}>MongoDB</span>
      </h1>
      <div>{limit}</div>
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
        connected to&nbsp;
        <span className={styles.dburl}>{DBUrl || ''}</span>
      </p>

      {data.map((i) => {
        return (
          <div className={styles.repo} key={i._id}>
            <a href={i.html_url} target='_blank'>
              {i.name}
            </a>
          </div>
        );
      })}

      <div className={styles.colors}>
        {['primary', 'success', 'error', 'warning'].map((name, index) => {
          return (
            <div className={styles[name]} key={index}>
              {name}
            </div>
          );
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
