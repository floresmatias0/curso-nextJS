import Head from 'next/head';
import Layout from '../components/layout';
import Title from '../components/title';

const Home = () => {
  return (
    <Layout>
    <Head>
      <title>Aprendiendo nextJS</title>
      <meta name="description" content="mi nombre es matias y estoy probando el componente Head que ofrece nextJS"/>
    </Head>
      <Title>Home Page</Title>
      <p>aprendamos nextJS con webtutoriales!</p>
      <style jsx>
      {`
        p{
          color: darkgray;
        }
        p:hover{
          color: darkred;
        }
      `}
      </style>
    </Layout>
  )
}

export default Home;
