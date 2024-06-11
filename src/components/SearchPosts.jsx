import { usePosts } from "../contexts/PostsContext";

function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePosts();

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchPosts;
