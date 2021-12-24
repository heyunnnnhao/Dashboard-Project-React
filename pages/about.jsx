import { Layout, Wrapper } from 'components';
import styles from 'styles/About.module.scss';
import { useFetch } from 'utils';

const About = () => {
  const { data, error, loading } = useFetch('/api/hello', { latency: 1000, name: 'about' });

  console.log(data, error, loading);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return (
          <div key={item.id} className={styles.content}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
