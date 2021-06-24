import React, { Component } from 'react'
import Nodefetch from 'node-fetch'

import ContentDisplay from './content-display-container/ContentDisplay'
import ContentNavigation from './content-navigation-section/ContentNavigation'

export default class MainContainer extends Component {

    state = {
        //change string to determine what component is rendered to the page
        page: '',
        // allRecipesContainer: true,
        // shoppingList: false
        recipes: []
    }

    // componentDidMount(){
    //     fetch('http://127.0.0.1:9393/recipes')
    //         .then(response => response.json())
    //         .then(recipes => this.setState(recipes))
    //     }
        componentDidMount(){
            Nodefetch('http://127.0.0.1:9393/recipes')
                .then(response => response.json())
                .then(recipes => this.setState(recipes))
        }

    changePageState = (string) => {
        return this.setState({page: string})
    }
    

    render() {
        return (
            <div className='main-container'>

                <ContentNavigation changePageState={this.changePageState} currentPage={this.state.page}/>
                <ContentDisplay displayContainer={this.state.page} recipes={this.state.recipes}/>
                
            </div>
        )
    }
}
