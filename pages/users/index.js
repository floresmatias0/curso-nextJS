import Layout from '../../components/layout';
import Title from '../../components/title';
import Link from 'next/link'

const Users = ({users}) => {

  return (
    <Layout>
      <Title>Users Page</Title>
      <div>
      {users.map((user,i) => {
        return (
          <Link href="/users/[id]" as={`/users/${user.id}`} key={i}>
            <a>
              <h3>{user.name}</h3>
              <h4>{user.username}</h4>
              <h4>{user.email}</h4>
            </a>
          </Link>
        )
      })}
      </div>
      <style jsx>
        {`
          div{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }
          a{
            width: 15em;
            min-height: 16em;
            max-height: 16em;
            margin: 0.5em;
            border: 1px solid darkgray;
            border-radius: 0.5em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            text-decoration: none;
          }
          a:hover{
            border: 1px solid darkblue;
          }
          a h4, a h3{
            margin: 1em;
          }
        `}
      </style>
    </Layout>

  )
}

export const getServerSideProps = async() => {
  var users

  await fetch('https://jsonplaceholder.typicode.com/users')
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

export default Users;
