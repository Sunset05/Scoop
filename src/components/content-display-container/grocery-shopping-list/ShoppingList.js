import { render } from '@testing-library/react'
import React from 'react'

export default function ShoppingList(props) {

    const recipeIngredientsArray = props.recipes.map(recipe => {
        return recipe.ingredients.map(ingredient => {
            return ingredient.name
        })
    })
    
    const renderShoppingList = () => {
        const flatArray = recipeIngredientsArray.flat() 
        for (let i = 0; i < flatArray.length; i++){
            render(
                <li>{flatArray[i]}</li>
            ) 
        }

        console.log(flatArray)
        console.log(flatArray.length)
    }



    return (
        <div className="shopping-list-container">
            <ul>
                {renderShoppingList()}
            </ul>
        </div>
    )
}
