
import Layout from 'components/layout';
import styles from 'styles/About.module.scss';

const About = () => {
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
