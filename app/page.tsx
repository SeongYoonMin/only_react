function Page() {
  return <div>page</div>
}

export default function Home() {
  return (
    <main className="box-border p-2 flex flex-col items-start justify-center">
      <Page />
    </main>
  )
}
