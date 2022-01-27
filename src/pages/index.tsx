import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MongoClient } from 'mongodb';
import { DBUrl, env } from 'constant';
import { updateMyReposToDB, getGithubApiLimit, getGithubUserInfo } from 'lib/github';
import { MY_GITHUB_USERNAME } from 'constant';
import styles from 'styles/index.module.scss';

export default function Index({ DBUrl, isConnected, data }): JSX.Element {
  const { setTheme } = useTheme();
  const [limit, setLimit] = useState();

  useEffect(() => {
    (async (): Promise<any> => {
      const remain: any = await getGithubApiLimit();
      const updateInfo = await updateMyReposToDB();
      setLimit(remain.data.remaining);
      console.log(env);
      console.log(updateInfo);
    })();
  }, []);

  return (
    <>
      <h1 className={styles.title}>
        <span className={styles.nextjs}>Next.js&nbsp;</span>
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
        <span className={styles.dburl}>{DBUrl}</span>
      </p>

      {data.map((i) => {
        return (
          <div className={styles.repo} key={i._id}>
            <a href={i.html_url} target='_blank' rel='noreferrer'>
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
