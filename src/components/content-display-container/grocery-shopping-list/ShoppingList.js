import { render } from '@testing-library/react'
import React from 'react'

import ShoppingListItem from './ShoppingListItem'

export default function ShoppingList(props) {

    const recipeIngredientsArray = props.recipes.map(recipe => {
        return recipe.ingredients.map(ingredient => {
            return ingredient.name
        })
    })
    

    const renderShoppingList = () => {
        const flatArray = recipeIngredientsArray.flat()
        return flatArray.map(recipe => {
            return <ShoppingListItem name={recipe}/>
        })
    }

    return (
        <div className="shopping-list-container">
            <ul>
                {renderShoppingList()}
            </ul>
        </div>
    )
}
