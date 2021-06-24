import React, { Component } from 'react'

export default class RecipeForm extends Component {

    state = {
        image_url: '',
        ingredients: [],
        meal: '',
        isChecked: false
    }

    handleImageChange = event => {
        this.setState({
            image_url: event.target.value
        })
    }

    handleMealChange = event => {
        this.setState({
            meal: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log(`${this.state.meal} ${this.state.image_url}`)
        const myFormData = new FormData(event.target)
        console.log(myFormData)
        event.target.reset()   
    }

    handleOnChange = () => {
        this.setState({isChecked: !this.state.isChecked})
    }

    render() {
        return (
            <form onSubmit= { this.handleSubmit }>
                <div>
                    <label>Recipe name</label>
                    <input 
                        type="text" 
                        value={this.state.meal} 
                        onChange={this.handleMealChange}
                    />
                </div>
                <div>
                    <label>Image_url</label>
                    <input 
                        type="text"
                        value={this.state.image_url}
                        onChange={this.handleImageChange}
                    />
                </div>
                <button type="Submit">Submit</button>
            </form>
        )
    }
}
