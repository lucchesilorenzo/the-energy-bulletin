import { usePosts } from "../contexts/PostsContext";
import styles from "./List.module.css";

function List() {
  const { posts } = usePosts();
  return (
    <ul className={styles.ul}>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
