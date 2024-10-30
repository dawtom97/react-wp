
import WpPostCard from "./components/WpPostCard/WpPostCard";
import { useGetWpPosts } from "./wp-services/wp-posts";


function App() {
  const {data:posts, isLoading, isError} = useGetWpPosts();

  console.log(posts)

  return (
    <div>

        {posts?.map(post => <WpPostCard key={post.id} title={post.title.rendered}/>)}
        
    </div>
  );
}
export default App;
