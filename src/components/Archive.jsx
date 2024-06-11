import { useState } from "react";
import { usePosts } from "../contexts/PostsContext";
import styles from "./Archive.module.css";

function Archive() {
  const { archivePosts, onAddPost } = usePosts();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={styles.aside}>
      <h2>Post Archive</h2>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {!isOpen ? "Show archive posts" : "Hide archive posts"}
      </button>
      {isOpen &&
        archivePosts.map((post, i) => (
          <ul key={i}>
            <li>
              <p>
                <strong>{post.title}: </strong>
                {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add post</button>
            </li>
          </ul>
        ))}
    </aside>
  );
}

export default Archive;
