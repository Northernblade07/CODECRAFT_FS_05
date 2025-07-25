import { getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing } from "@/actions/profile.action"
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

export async function generateMetadata({params}:{params:Promise<{username:string}>}){
  const username = (await params).username  
  const user = await getProfileByUsername(username);

    if(!user) return;
    return {
        title:`${user?.name ?? user?.username}`,
        description:user.bio || `check out ${user.username}'s profile.`
    };
}

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  console.log(params)
  const username = (await params).username
  console.log(username)
  const user = await getProfileByUsername(username);
    if(!user)notFound();
    const [posts , likedPosts, isCurrentUserFollowing] = await Promise.all([getUserPosts(user.id),
        getUserLikedPosts(user.id),
        isFollowing(user.id)
    ])

  return (
    <ProfilePageClient user={user} posts={posts} likedPosts={likedPosts} isFollowing={isCurrentUserFollowing}/>
  )
}