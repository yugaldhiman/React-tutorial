import React from 'react'
import './allFile.css'
function Header(props) {
    return (
        <header className='head'>
            <a href="./">{props.title}</a>
        </header>
    )
}

export default Header