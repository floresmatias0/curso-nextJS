import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/users">
          <a>Users</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        {/*
          <Link href="/posts/[id]" as={`/posts/${5}`}>
            <a>Post #5</a>
          </Link>
        */}
        <style jsx>
        {`
          nav{
            padding-top: 1em;
          }
          a{
            padding: 0 1em;
          }
        `}
        </style>
    </nav>

  )
}

export default Navbar;
