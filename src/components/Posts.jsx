import styles from "./Posts.module.css";
import List from "./List";

function Posts() {
  return (
    <section className={styles.section}>
      <List />
    </section>
  );
}

export default Posts;
