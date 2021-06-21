import React, { Component } from 'react'
import DisplayContainer from './content-display-container/DisplayContainer'
import ContentNavigation from './content-navigation-section/ContentNavigation'

export default class MainContainer extends Component {
    render() {
        return (
            <div className="main-container">
                
                <ContentNavigation/>
                <DisplayContainer/>
                
            </div>
        )
    }
}
