import { useRouter } from "next/router"

const PostPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Post ID: {id}</h1>
      <p>This is a dynamic route for post {id}.</p>
    </div>
  )
}

export default PostPage
