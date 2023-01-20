import React, { useState } from "react";
import "./App.css";
import WantTry from "./components/WantTry/WantTry";
import NavBar from "./components/NavBar/NavBar";
import AddRecipes from "./components/AddRecipes/AddRecipes";
import MyRecipe from "./components/MyRecipes/MyRecipe";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";


function App() {
    return (
        <div>
            <NavBar />

            <div className='container'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/myrecipes" element={<MyRecipe />} />
                    <Route path="/addrecipes" element={<AddRecipes />} />
                    <Route path="/wanttry" element={<WantTry />} />
                </Routes>

            </div>
        </div>
    );
}


export default App;
