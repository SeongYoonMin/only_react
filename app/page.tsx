const Page = () => {
  const title = 'page'
  return <div>{title}</div>
}

export const Home = () => {
  const a = 'sdf'

  return (
    <main className="box-border p-2 flex flex-col items-start justify-center">
      {a}
      <Page />
    </main>
  )
}

export default Home
