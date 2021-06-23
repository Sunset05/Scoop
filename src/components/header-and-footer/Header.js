import React from 'react'

export default function Header() {
    return (
        <div className="header">
            <a href="#default" class="logo">Scoop</a>
            <div className="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}
