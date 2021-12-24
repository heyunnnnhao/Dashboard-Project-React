import Layout from 'components/layout';
import styles from 'styles/About.module.scss';
import { useFetch } from 'utils';
const About = () => {
  const { data, error, loading } = useFetch('/api/hello');
  console.log(data, error, loading);
  return (
    <div className={styles.container}>
      <div className={styles.content}>2</div>
      <div className={styles.content}>1</div>
    </div>
  );
};

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
