import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./components/NavBar/ErrorPage";
import WantTry from "./components/WantTry/WantTry";
import NavBar from "./components/NavBar/NavBar";
import AddRecipes from "./components/AddRecipes/AddRecipes";
import MyRecipe from "./components/MyRecipes/MyRecipe";
import Home from "./components/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, path: "/", element: <Home /> },
            { path: "/myrecipes", element:<MyRecipe /> },
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
