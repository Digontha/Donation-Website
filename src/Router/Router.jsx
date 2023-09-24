import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Pages/Home/Home";
import CategoryDetails from "../Components/Pages/Home/Category/CategoryDetails";
 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
          {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("data.json"),
          },
          {
            path:"/details/:id",
            element:<CategoryDetails></CategoryDetails>,
            loader:()=>fetch("data.json"),
          }
      ]
    },
  ]);
  export default router