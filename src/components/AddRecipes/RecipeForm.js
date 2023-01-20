import React from "react";
import { useState } from "react";
import "./RecipeForm.css";

const RecipeForm = () => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const [ingredients, setIngredients] = useState([]);
    const [ingredient, setIngredient] = useState("");


    const addTitle = (event) => {
        setTitle(event.target.value)
    };
    const addDate = (event) => {
        setDate(event.target.value)
    };
    const addTime = (event) => {
        setTime(event.target.value)
    };

    const addDescription = (event) => {
        setDescription(event.target.value)
    }

    const addIngredient = (event) => {
        setIngredient(event.target.value)
    }

    const addIngredients = () => {
        if (ingredient === '') {
            return
        }
        setIngredients(prevIngredients => [...prevIngredients, ingredient])
    }

    const deleteIngredient = (index) => {
        setIngredients(ingredients.filter((v, i, a) => i !== index));
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const recipeData = {
            title: title,
            date: date,
            time: time,
            description: description,
            ingredients: ingredients
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <ul className="new-recipe__container">
                <li className="new-recipe__title">
                    <div className="label_title">
                        <p>Название</p>
                        <input type="text" value={title} onChange={addTitle} placeholder="Добавьте название"/>
                    </div>
                    <div className="label_title_date">
                        <p>Дата</p>
                        <input type="date" min="2022-12-27" max="2025-12-31" value={date} onChange={addDate}/>
                    </div>
                </li>
                <li className="new-recipe__time">
                    <p>Время приготовления</p>
                    <input type="text" value={time} onChange={addTime} placeholder="Добавьте время приготовления"/>
                </li>

                <li className="new-recipe__add-ingredients">
                    <p>Ингредиенты</p>
                    <div id="newtask" >
                        <input type="text" value={ingredient} onChange={addIngredient} placeholder="Добавьте ингредиент" />
                        <button id="push" onClick={addIngredients}>+</button>
                    </div>
                    <ul className='ingredients-list'>
                        {ingredients.map((ingredient, index) => {
                            return (
                                <li key={index}>
                                    <span>
                                        {ingredient}
                                    </span>
                                    <button class="delete" onClick={() => deleteIngredient(index)} >
                                        <i class="far fa-trash-alt"></i>
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </li>

                <li className="new-recipe__control">
                    <p>Описание</p>
                    <textarea id="subject" name="subject" placeholder="Добавьте описание" value={description} onChange={addDescription}></textarea>
                </li>
            </ul>


            <div className='new-recipe__action-add'>
                <button type="submit">Сохранить</button>
            </div>

        </form >

    )
}
export default RecipeForm;