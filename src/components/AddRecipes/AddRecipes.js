import React from 'react';
import { useState } from 'react';
import "./AddRecipes.css";
import NewRecipe from '../AddRecipes/NewRecipe';

const AddRecipes = (props) => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");

    const addTitle = (event) =>
        setTitle(event.target.value);

    const addTime = (event) =>
        setTime(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();

        const saveData = {
            title: title,
            time: time,
        };
        props.onSaveNewData(saveData);
        setTitle("");
        setTime("");

    };


    return (
     <NewRecipe/>
    );
};

export default AddRecipes;