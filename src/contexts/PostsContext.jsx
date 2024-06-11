import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

const PostsContext = createContext();

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function PostsProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 20 }, () => createRandomPost())
  );

  const [archivePosts] = useState(() =>
    Array.from({ length: 100 }, () => createRandomPost())
  );

  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(newPost) {
    setPosts((posts) => {
      const duplicatePost = posts.find((post) => post.title === newPost.title);

      if (duplicatePost) {
        alert("The post is already in the list!");
        return posts;
      }
      return [newPost, ...posts];
    });
  }

  function handleClearPosts() {
    if (window.confirm("Are you sure you want to delete all posts?"))
      setPosts([]);
  }

  return (
    <PostsContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
        archivePosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostsContext);
  if (context === undefined)
    throw new Error("PostsContext was used outside PostProvider.");
  return context;
}

export { PostsProvider, usePosts };
