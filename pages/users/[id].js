import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Title from '../../components/title';

const User = ({users}) => {

  const router = useRouter();

  if(router.isFallback){
    return <div>Cargando...</div>
  }

  return (
    <>
    <Head>
      <title>User #{users.id}</title>
      <meta name="description" content="mi nombre es matias y estoy probando el componente Head que ofrece nextJS"/>
    </Head>
      <Title>User Details</Title>
      <div className="card">
        <h2>{users.name}</h2>
        <div className="imagen">
        <Image
          src={`/images/${users.id}.jpg`}
          alt="perfil"
          width={400}
          height={600}
          objectFit="cover"/>
        </div>
        <h3>{users.company.name}</h3>
        <ul>
          <li>{users.phone}</li>
          <li>{users.email}</li>
          <li>{users.website}</li>
        </ul>
      </div>
      <style jsx>
      {`
        .imagen{
          padding:1em;
          border:none;
        }
        .card{
          width: 20em;
          text-decoration: none;
          border: 1px solid darkgray;
          border-radius: 1em;
          text-align: center;
        }
        .card:hover{
          border: 1px solid darkblue;
        }
        .card ul{
          padding: 0;
          text-align: center;
          list-style: none;
        }

      `}
      </style>
    </>
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
    },
  }
}

export default User;
