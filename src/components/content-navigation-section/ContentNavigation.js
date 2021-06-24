import React from 'react'

export default function ContentNavigation(props) {
    //on click function passed down from main container that changes the string held in state in main container
    return (
        <div className="content-navigation-container">

        {/* change te string in state to content display can use this state */}
            <button onClick={() => props.changePageState("Recipes")}>Cookbook recipes</button>
            <button onClick={() => props.changePageState("Create Recipe")}>Create recipe</button>
            <button onClick={ () => props.changePageState("Shopping List")}>Shopping list</button>
        </div>
    )
}
