'use client'
import { use } from 'react'
 
export default function BlogPostPage({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = use(params)
  return (
    <div>
      <p>{username}</p>
    </div>
  )
}