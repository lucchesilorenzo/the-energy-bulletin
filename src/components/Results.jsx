import { usePosts } from "../contexts/PostsContext";

function Results() {
  const { posts } = usePosts();
  return <p>🔎 {posts.length} posts found</p>;
}

export default Results;
