
import WpPostCard from "./components/WpPostCard/WpPostCard";
import { useGetWpPosts } from "./wp-services/wp-posts";


function App() {
  const postsLimit = import.meta.env.VITE_WP_HOMEPAGE_POSTS_LIMIT;
  const {data:posts, isLoading, isError} = useGetWpPosts(postsLimit);

  console.log(posts)

  return (
    <div>

        {posts?.map(post => <WpPostCard key={post.id} post={post}/>)}
        
    </div>
  );
}
export default App;
