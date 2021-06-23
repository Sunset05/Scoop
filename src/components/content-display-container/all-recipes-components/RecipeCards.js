import React from 'react'

export default function RecipeCard(props) {

    // create an li for each ingredient of a recipe
    const renderIngredientList = () => {
        return props.ingredients.map(ingredient => {
            return <li className="recipe-card-list-item">{ingredient.name}</li>
        })
    }

    return (
        <div className="recipe-card-container">
            <h2 className="recipe-card-title">{props.meal}</h2>
            <img className="recipe-card-image" src={props.imageUrl} alt="future photos" width="200" height="200"/>
            <div>
                <ul className="recipe-card-list">
                    {renderIngredientList()}
                </ul>
            </div>    
        </div>
    )
}
