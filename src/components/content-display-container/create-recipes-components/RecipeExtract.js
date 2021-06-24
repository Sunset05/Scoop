import React from 'react'
import Nodefetch from 'node-fetch'

export default function RecipeExtract() {
    Nodefetch('https://tasty.co/article/melissaharrison/easy-dinner-recipes')
        .then(response => response.json())
        .console.log(response)
    return (
        <div>
            
        </div>
    )
}
