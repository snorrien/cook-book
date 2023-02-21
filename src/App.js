import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./components/NavBar/ErrorPage";
import WantTry from "./components/WantTry/WantTry";
import MyRecipeItem from "./components/MyRecipes/MyRecipeItem";
import AddRecipes from "./components/AddRecipes/AddRecipes";
import MyRecipe from "./components/MyRecipes/MyRecipe";
import Home from "./components/Home/Home";
import Introduction from "./components/Home/Introduction";
import SignUp from "./components/Home/SignUp";
import LogIn from "./components/Home/LogIn";
  

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
               
                path: "/",
                element: <Home />,
                children: [
                    { path: "/introduction", element: <Introduction /> },
                    { path: "/login", element: <LogIn /> },
                    { path: "/register" , element: <SignUp /> },

                ],
            },
            { path: "/myrecipes", element: <MyRecipe /> },
            { path: "/myrecipes/:eventId", element: <MyRecipeItem /> },
            { path: "/addrecipes", element: <AddRecipes /> },
            { path: "/wanttry", element: <WantTry /> }
        ]
    },
]);


function App() {
    return (
        <RouterProvider router={router} />
    );
}


export default App;
