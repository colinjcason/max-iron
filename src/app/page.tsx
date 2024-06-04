import prisma from "@/lib/prisma"
import Link from "next/link"

async function getPosts(){
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return posts
}

export default async function Home() {
  const posts = await getPosts()
  console.log(posts)

  return (
    <div>
      <Link href="/add-post">Add Post</Link>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
