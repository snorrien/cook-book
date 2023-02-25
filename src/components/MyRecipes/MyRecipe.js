import React from 'react';
import "./MyRecipe.css";
import MyRecipeItem from './MyRecipeItem';



const ITEMS_RES = [
    {
        id: "res1",
        title: 'Name_1',
        ingredients: ["one", "two", "three"],

    },
    {
        id: "res2",
        title: 'Name_2',
        ingredients: ["one", "two", "three"],

    },
    {
        id: "res3",
        title: 'Name_3',
        ingredients: ["one", "two", "three"],
    }
];

const MyRecipe = () => {
    const itemList = ITEMS_RES.map((item) => (
        <MyRecipeItem
            key={item.id}
            title={item.title}
            ingredients={item.ingredients}
        />
    ));

    return (
        <div>
            <div className='page-title'>
            <h1> Мои рецепты</h1>
            </div>
            <div className="row ">
                {itemList}
            </div>
        </div>
    );
};

export default MyRecipe;