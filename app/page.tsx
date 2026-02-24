import { revalidatePosts } from "@/app/actions/revalidate";

async function getPosts() {
  console.log("getPosts called");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
    next: {
      tags: ["posts"], 
    },
  });

  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <main style={{ padding: "20px" }}>
      <h1>Posts</h1>

      {}
      <form action={revalidatePosts}>
        <button
          style={{
            padding: "10px 18px",
            background: "black",
            color: "white",
            borderRadius: "8px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          Clear Cache
        </button>
      </form>

      {}
      {posts.slice(0, 5).map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </main>
  );
}