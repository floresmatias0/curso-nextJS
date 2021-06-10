import Layout from '../components/layout';
import Title from '../components/title';

const Home = () => {
  return (
    <Layout>
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
