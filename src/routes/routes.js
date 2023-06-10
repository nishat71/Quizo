import { createBrowserRouter } from "react-router-dom";
import Error from "../layout/Error";

import Home from '../components/Home.jsx';
import Topics from "../components/Topics";
import Statistics from "../components/Statistics";
import Blog from "../components/Blog"
import Root from "../components/Root";
import TopicDetails from "../components/TopicDetails";


const router = createBrowserRouter([
   {
    path:"/",
    element:<Root/>,
    errorElement:<Error/>,
    loader: ()=> fetch("https://openapi.programming-hero.com/api/quiz"),
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
      element:<Topics/>,
     },
     {
      path:"/topic/:id",
      element:<TopicDetails/>,
      loader: async({params})=>{
         return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      }
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
