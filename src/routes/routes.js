import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../layout/Error";
import Root from "../components/Root";
import Blog from "../components/Blog/Blog";
import Topics from "../components/Topics/Topics";
import Statistics from "../components/Statistics/Statistics";



const router = createBrowserRouter([
   {
    path:"/",
    element:<Root/>,
    errorElement:<Error/>,
    children:[
     {
      path:"/",
      element:<Home/>
     },
     {
      path:"/home",
      element:<Home/>
     },
     {
      path:"/topics",
      element:<Topics/>
     },
     {
      path:"/statistics",
      element:<Statistics/>
     },
     {
      path:"/blog",
      element:<Blog/>
     },
    ]
   }
])
export default router;
