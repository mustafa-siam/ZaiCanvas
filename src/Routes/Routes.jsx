import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Allitems from "../components/Allitems";
import Home from "../Layouts/Home";
import Root from "../Root"
import Additems from "../components/Additems";
import Mycrafts from "../components/Mycrafts";
import Privateroute from "./Privateroute";
import Updatecraft from "../components/Updatecraft";
import Viewdetails from "../components/Viewdetails";
import Userprofile from "../components/Userprofile";
import Editprofile from "../components/Editprofile";
import Subcatagoryitems from "../pages/Subcatagoryitems";
import Errorpage from "../pages/Errorpage";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
  {
    path:"/allitems",
    element:<Allitems></Allitems>,
    loader:()=>fetch('https://zaicanvas-server.vercel.app/craftitems')
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/additems',
    element:<Privateroute><Additems></Additems></Privateroute> 
  },
  {
    path:'/mycraft/:email',
    element:<Privateroute><Mycrafts></Mycrafts></Privateroute>,
    loader:({params})=>fetch(`https://zaicanvas-server.vercel.app/mycraft/${params.email}`)
  },
  {
    path:'/updatecraft/:id',
    element:<Updatecraft></Updatecraft>,
    loader:({params})=>fetch(`https://zaicanvas-server.vercel.app/craftitems/${params.id}`)
  },
  {
    path:'/details/:id',
    element:<Viewdetails></Viewdetails>,
    loader:({params})=>fetch(`https://zaicanvas-server.vercel.app/craftitems/${params.id}`)
  },
  {
    path:'/userprofile',
    element:<Userprofile></Userprofile>,
  },
  {
    path:'/editprofile',
    element:<Editprofile></Editprofile>
  },
  {
  path: '/subcategory/:catagoryname',
  element:<Subcatagoryitems></Subcatagoryitems>,
  loader: ({ params }) => fetch(`https://zaicanvas-server.vercel.app/subcategory/${params.catagoryname}`),
}
  ]
  },
]);
export default router;