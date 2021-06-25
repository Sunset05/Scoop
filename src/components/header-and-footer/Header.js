import React from 'react'

export default function Header() {
    return (
        <div className="header">
            <div className="logo-div">
                <a href="#default" class="logo">Scoop</a>
                <img className="scoop-image" alt="scoop yur dreams" src="https://www.seekpng.com/png/detail/211-2115708_banner-freeuse-download-measuring-cups-scoop-portion-measuring.png"></img>
            </div>
            <div className="header-right">
                <a class="active" href="https://www.linkedin.com/in/keith-funk-7082a315b/" target="_blank">linkedIn</a>
                <a href="https://github.com/Sunset05" target="_blank">Github</a>
            </div>
        </div>
    )
}
