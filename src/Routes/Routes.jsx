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
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
  {
    path:"/allitems",
    element:<Allitems></Allitems>,
    loader:()=>fetch('http://localhost:5000/craftitems')
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
    loader:({params})=>fetch(`http://localhost:5000/mycraft/${params.email}`)
  },
  {
    path:'/updatecraft/:id',
    element:<Updatecraft></Updatecraft>,
    loader:({params})=>fetch(`http://localhost:5000/craftitems/${params.id}`)
  }
  ]
  },
]);
export default router;