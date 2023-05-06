import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News";
import TermsAndConditions from "../pages/Others/TermsAndConditions/TermsAndConditions";
import ProfileSetting from "../pages/ProfileSetting/ProfileSetting";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => {
                    return fetch('https://dragon-news-server-rouge-eight.vercel.app/news')
                }
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => {
                    return fetch(`https://dragon-news-server-rouge-eight.vercel.app/category/${params.id}`)
                }
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://dragon-news-server-rouge-eight.vercel.app/news/${params.id}`)
                }
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'profile',
                element: <PrivateRoute>
                    <ProfileSetting></ProfileSetting>
                </PrivateRoute>
            },
            {
                path: 'terms',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ],
    },
]);

export default router;