import React from "react";
import { useState } from "react";
import "./RecipeForm.css";
import { saveRecipe } from "../../store/myRecipeStore/AddRecipeTo";

const RecipeForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [ingredient, setIngredient] = useState("");

    const addTitle = (event) => {
        setTitle(event.target.value)
    };
    const addDescription = (event) => {
        setDescription(event.target.value)
    }
    const addIngredient = (event) => {
        setIngredient(event.target.value);
    }

    const addIngredients = () => {
        if (ingredient === '') {
            return
        }
        setIngredients(prevIngredients => [...prevIngredients, ingredient]);
        setIngredient("");
    }

    const deleteIngredient = (index) => {
        setIngredients(ingredients.filter((v, i, a) => i !== index));
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const recipeData = {
            title: title,
            description: description,
            ingredients: ingredients
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <ul className="new-recipe__container">
                <li className="new-recipe__title">
                    <div className="label_title">
                        <h4 className="label_title_save">Название</h4>
                        <input type="text" value={title} onChange={addTitle} placeholder="Добавьте название" />
                    </div>
                </li>
                <li className="new-recipe__add-ingredients">
                    <h4 className="label_title_save">Ингредиенты</h4>
                    <div id="newtask" >
                        <input type="text" value={ingredient} onChange={addIngredient} placeholder="Добавьте ингредиент" />
                        <button id="push" onClick={addIngredients}>
                            <img className="img-plus" src="/img/plus.png" />
                        </button>
                    </div>
                    <ul className='ingredients-list'>
                        {ingredients.map((ingredient, index) => {
                            return (
                                <li className="adding_ingr" key={index}>
                                    <span>
                                        {ingredient}
                                    </span>
                                    <button className="delete" onClick={() => deleteIngredient(index)} >
                                        <img className="img-trash" src="/img/trash.png" />
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </li>
                <li className="new-recipe__control">
                    <h4>Описание</h4>
                    <textarea id="subject" name="subject" placeholder="Добавьте описание" value={description} onChange={addDescription}></textarea>
                </li>
                <li>
                    <h4 className="label_title_save">Картинки</h4>

                </li>
            </ul>


            <div className='new-recipe__action-add'>
                <button type="submit" onClick={() => saveRecipe({
            title: title,
            description: description,
            ingredients: ingredients
        })} >Сохранить</button>
            </div>

        </form >

    )
}
export default RecipeForm;