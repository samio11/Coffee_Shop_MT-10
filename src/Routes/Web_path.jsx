import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Components/MainRoot";
import Home from "../Components/Home";

const Web_path = createBrowserRouter([
    {
        path: '/',
        element: <MainRoot></MainRoot>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
])
   


export default Web_path;