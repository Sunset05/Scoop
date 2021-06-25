import React from 'react'

export default function TitleImage(props) {
    return (
        <div>
            <h2 className="recipe-card-title">{props.meal}</h2>
            <img className="recipe-card-image" src={props.src} alt="future photos" width="200" height="200"/>
        </div>
    )
}