import { Layout, Loading, Error } from 'components';
import styles from 'styles/About.module.scss';
import { useFetch } from 'utils';

const About = () => {
  const { data, error, loading } = useFetch('/api/hello', { latency: 1000, name: 'about' });

  console.log(process.env.NODE_ENV);
  console.log(data, error, loading);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className={styles.container}>
      {data?.map((item, index) => {
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
