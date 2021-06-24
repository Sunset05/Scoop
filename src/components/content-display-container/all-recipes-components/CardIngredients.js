import React from 'react'

export default function CardIngredients(props) {

    const renderIngredientList = () => {
        return props.ingredients.map(ingredient => {
            return <li className="recipe-card-list-item">{ingredient.name}</li>
        })
    }
    return (
        <div className="recipe-card-list">
            <li className="recipe-card-list-item">{ingredient.name}</li>
        </div>
    )
}
