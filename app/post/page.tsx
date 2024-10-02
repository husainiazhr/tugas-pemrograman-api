import CardList from "../components/post/CardList";
import ViewUserButton from "../components/post/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Iposts {
  userId: number,
  id: number,
  title: string,
  body: string
}

const Post = async() => {
  const response = await fetch(base_url, {cache: "no-store"})
  const posts: Iposts[] = await response.json()
  return (
    <>
    <p>{new Date().toLocaleTimeString()}</p>
    <h1 className="text-fuchsia-500">Post</h1>
    {posts.map((post) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <CardList key={post.id}>
        <p>{post.id}</p>
        <i>{post.title}</i>
        <p>{post.body}</p>
        <ViewUserButton userId={post.userId} />
      </CardList>
      )
    })}
    </>
  );
};

export default Post