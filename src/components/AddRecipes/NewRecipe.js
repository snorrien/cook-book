import "./AddRecipes.js";
import RecipeForm from "./RecipeForm.js";
import "./NewRecipe.css";
import AddRecipes from "./AddRecipes.js";

const NewRecipe = (props) => {
    const saveAddingRecipeHandler = (enteredRecipeData) => {
        const saveData = {
            ...enteredRecipeData,
            id: Math.random().toString()
        };
        props.onAddRecipe(saveData)
    };

    return (
        <div className="new-recipe">
            <RecipeForm onSaveNewData={saveAddingRecipeHandler} />
        </div>
    )
}

export default NewRecipe;