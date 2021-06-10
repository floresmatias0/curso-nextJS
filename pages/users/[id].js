import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import Title from '../../components/title';

const User = ({users}) => {

  const router = useRouter();

  if(router.isFallback){
    return <div>Cargando...</div>
  }

  console.log(users);

  return (
    <Layout>
      <Title>User Details</Title>
      <div>
        <h2>{users.name}</h2>
        <h3>{users.company.name}</h3>
        <ul>
          <li>{users.phone}</li>
          <li>{users.email}</li>
          <li>{users.website}</li>
        </ul>
      </div>
      <style jsx>
      {`
        div{
          width: 20em;
          text-decoration: none;
          border: 1px solid darkgray;
          border-radius: 1em;
          text-align: center;
        }
        div:hover{
          border: 1px solid darkblue;
        }
        div ul{
          padding: 0;
          text-align: center;
          list-style: none;
        }

      `}
      </style>
    </Layout>
  )
}
export const getStaticPaths = async () => {
  var users

  await fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    users = data
  })

  const paths = users.map(user => {
    return {
      params: {
        id: `${user.id}`
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async({params}) => {
  var users

  await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  .then(res => res.json())
  .then(data => {
    users = data
  })

  return {
    props: {
      users
    }, // will be passed to the page component as props
  }
}

export default User;