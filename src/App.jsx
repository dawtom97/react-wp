import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import WpLatestPosts from "./components/WpLatestPosts/WpLatestPosts";
import { useGetWpBasicInfo } from "./wp-services/wp-basic-info";


function App() {

  const {data:info} = useGetWpBasicInfo();

  console.log(info);

  if (!info) return;

  return (
    <div>
       
       <h1>{info.name}</h1>

       <AppHeader logo={info.logoUrl}/>

       <div style={{width:'90%', maxWidth:1400,margin:"0 auto"}}>
          <WpLatestPosts/>
       </div>

      <AppFooter/>
        
    </div>
  );
}
export default App;
