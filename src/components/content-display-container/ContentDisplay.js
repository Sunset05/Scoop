import React from 'react'
import AllRecipesContainer from './all-recipes-components/AllRecipesContainer'
import CreateRecipeContainer from './create-recipes-components/CreateRecipeContainer';
import DefaultContentDisplay from './DefaultContentDisplay';

export default function ContentDisplay(props) {

//switch statement that decides what components are displayed based on string in state above
    const renderSwitch = (string) => {
        switch(string) {
            case "Recipes":
                return <AllRecipesContainer/>;
            case "Create Recipe":
                return <CreateRecipeContainer/>;
            default:
                return <DefaultContentDisplay/>;
        }
    }

    return (
        <div className="content-display-container">

            {renderSwitch(props.displayContainer)}

        </div>
    )
}
