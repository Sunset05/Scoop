import React from 'react'

export default function Header() {
    return (
        <div className="header">
            <div className="logo-div">
                <a href="#default" class="logo">Scoop</a>
                <img className="scoop-image" alt="scoop yur dreams" src="https://www.seekpng.com/png/detail/211-2115708_banner-freeuse-download-measuring-cups-scoop-portion-measuring.png"></img>
            </div>
            <div className="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}
