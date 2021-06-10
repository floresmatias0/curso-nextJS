import Layout from '../../components/layout';
import Title from '../../components/title';

const Post = ({posts}) => {
  return (
    <Layout>
      <Title>Post Details</Title>
      <div>
        <h2>{posts.title}</h2>
        <h3>{posts.body}</h3>
      </div>
      <style jsx>
      {`
        div{
          width: 30em;
          text-decoration: none;
          border: 1px solid darkgray;
          border-radius: 1em;
          text-align: center;
        }
        div:hover{
          border: 1px solid darkblue;
        }
        div h2,
        div h3{
            margin: 1em;
        }
      `}
      </style>
    </Layout>
  )
}

export const getServerSideProps = async({params}) => {
  var posts

  await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  .then(res => res.json())
  .then(data => {
    posts = data
  })

  return {
    props: {
      posts
    },
  }
}

export default Post;
