import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MY_GITHUB_USERNAME } from 'constant';
import { updateUserToDB, getGithubApiLimit } from 'pages/api/github';
import styles from 'styles/index.module.scss';

export default function Index({ limit }): JSX.Element {
  const { setTheme } = useTheme();

  useEffect(() => {}, []);

  return (
    <>
      <h1 className={styles.title}>
        <span className={styles.nextjs}>Next.js&nbsp;</span>
        <span className={styles.mongodb}>MongoDB</span>
      </h1>
      <div>{new Date(limit.reset * 1000).toLocaleString('zh-CN')}</div>
      <div>{limit.remaining}</div>
      <div className={styles.buttons}>
        <button onClick={() => setTheme('light')} className={styles.button}>
          Light Mode
        </button>
        <button onClick={() => setTheme('dark')} className={styles.button}>
          Dark Mode
        </button>
      </div>

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
  let limit = null;

  try {
    limit = await getGithubApiLimit();
  } catch (error) {
    console.log(error);
  }

  return {
    props: { limit },
  };
}
