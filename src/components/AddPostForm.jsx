import { useState } from "react";
import { usePosts } from "../contexts/PostsContext";
import styles from "./AddPostForm.module.css";

function AddPostForm() {
  const { onAddPost } = usePosts();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "" || body.trim() === "")
      return alert("Please fill in all fields.");

    const newPost = { title, body };
    onAddPost(newPost);
    setTitle("");
    setBody("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button>Add post</button>
    </form>
  );
}

export default AddPostForm;
