import React, { Component } from 'react'
import RecipeCard from './RecipeCards'

export default class AllRecipesContainer extends Component{
    
    // state = {
    //     recipes: []
    // }

    // componentDidMount(){
    //     fetch('http://127.0.0.1:9393/recipes')
    //         .then(response => response.json())
    //         .then(recipes => this.setState(recipes))
    //     }
    
    renderRecipeCards = () => {
        return this.props.recipes.map(recipe => {
            return <RecipeCard 
                        meal={recipe.meal} 
                        imageUrl={recipe.image_url} 
                        ingredients={recipe.ingredients}
                        addSelectedIngredients={this.props.addSelectedIngredients}
                    />
        })
    }

    render(){

        return (
            <div className="all-recipes-container">
                {this.renderRecipeCards()}
            </div>
        )
    }
}
