import Layout from '../../components/layout';
import Title from '../../components/title';
import Link from 'next/link'

const Posts = ({posts}) => {
  return(
    <Layout>
      <Title>Posts Page</Title>
      <div>
      {posts.map((post,i) => {
        return (
          <Link href="/posts/[id]" as={`/posts/${post.id}`} key={i}>
            <a>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
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
          a p, a h3{
            margin: 1em;
          }
        `}
      </style>
    </Layout>
  )
}

export const getServerSideProps = async() => {
  var posts

  await fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => {
    posts = data
  })

  return {
    props: {
      posts
    }, // will be passed to the page component as props
  }
}

export default Posts;
