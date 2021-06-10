const Title = ({children}) => {
  return (
    <>
    <h1>{children}</h1>
    <style jsx>
    {`
      h1{
        font-size: 3rem;
        text-align: center;
      }
    `}
    </style>
    </>
  )
}

export default Title;
