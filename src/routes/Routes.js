import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";

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
                path: '/category/:id',
                element: <Category></Category>
            }
        ],
    },
]);

export default router;