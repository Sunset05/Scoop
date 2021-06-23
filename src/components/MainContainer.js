import React, { Component } from 'react'

import ContentDisplay from './content-display-container/ContentDisplay'
import ContentNavigation from './content-navigation-section/ContentNavigation'

export default class MainContainer extends Component {

    state = {
        //change string to determine what component is rendered to the page
        page: '',
        // allRecipesContainer: true,
        // shoppingList: false
    }

    changePageState = (string) => {
        return this.setState({page: string})
    }
    

    render() {
        return (
            <div className='main-container'>

                <ContentNavigation changePageState={this.changePageState} currentPage={this.state.page}/>
                <ContentDisplay displayContainer={this.state.page} />
                
            </div>
        )
    }
}
