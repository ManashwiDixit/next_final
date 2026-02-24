async function getPosts() {
  console.log("getPosts function called");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", 
  });

  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

  console.log("PAGE RENDERED");

  return (
    <main style={{ padding: "20px" }}>
      <h1>Posts</h1>

      {posts.slice(0, 5).map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </main>
  );
}