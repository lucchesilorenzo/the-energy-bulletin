import { usePosts } from "../contexts/PostsContext";
import styles from "./Header.module.css";
import Results from "./Results";
import SearchPosts from "./SearchPosts";

function Header() {
  const { onClearPosts } = usePosts();

  return (
    <header className={styles.header}>
      <div>
        <img src="vite.svg" alt="Logo" />
        <h1>The Energy Bulletin</h1>
      </div>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
