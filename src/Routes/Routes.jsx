import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import AddItem from "../Components/AddItem";
import UpdateItem from "../Components/UpdateItem";
import Home from "../Pages/Home/Home/Home";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/addItem",
                element: <AddItem></AddItem>,
              },
              {
                path: "/updateItem",
                element: <UpdateItem></UpdateItem>,
              },
          
        ]
    }
]);

export default router;