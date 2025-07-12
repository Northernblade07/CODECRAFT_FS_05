import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import RecommendedUsers from "@/components/RecommendedUsers";
import { currentUser } from "@clerk/nextjs/server";

  export default async function Home() {
    const user = await currentUser()
    const dbUserId = await getDbUserId();
    const posts = await getPosts()
    console.log(posts)
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user?<CreatePost/>: null}

        <div className="space-y-6">
          {
              posts.map((post)=>(
                <PostCard key={post.id} dbUserId={dbUserId} post={post}/>
              ))
          }
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-4 top-20 sticky">

        <RecommendedUsers/>

      </div>
             
    </div>
  );
}
