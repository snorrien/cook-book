import MyRecipe from "./modules/recipes/components/MyRecipes/MyRecipe";
import NewRecipe from "./components/AddRecipes/NewRecipe";

function SaveRecipes(){
    const recipes = [
        {
            id: "r1",
            title: "name1",
            time: '1 hour',
            photo: 1
        },
        {
            id: "r2",
            title: "name2",
            time: '1 hour',
            photo: 1
        },
        {
            id: "r3",
            title: "name3",
            time: '1 hour',
            photo: 1
        }
    ]


    const addRecipeHandler = recipe => {
        console.log(recipe);
    };

    return(
        <div>
                <NewRecipe onAddRecipe={addRecipeHandler} />
                <MyRecipe items={recipes} />

        </div>
    )
}
export default SaveRecipes;