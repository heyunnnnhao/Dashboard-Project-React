import Image from 'next/image';
import Link from 'next/link';

import Layout from 'components/layout';
import styles from 'styles/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <a href='https://nextjs.org'>Next.js</a>
      </h1>

      <p className={styles.description}>
        Get started by editing <code className={styles.code}>pages/index.tsx</code>
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <Link href='/about'>
            <a>
              <h2>About &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href='/about'>
            <a>
              <h2>Test &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href='/about'>
            <a>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
        </div>

        <div className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </div>

        <div className={styles.card}>
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </div>

        <div className={styles.card}>
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
