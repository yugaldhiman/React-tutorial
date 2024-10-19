import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './All.css'

function Header() {
    return (
        <>
            <header>
                <NavLink className={"NavLink"} to='/home'>Home</NavLink>
                <NavLink className={"NavLink"} to="/inputFile">InputFile</NavLink>
                <NavLink className={"NavLink"} to="/outputFile">OutputFile</NavLink>
            </header>
            <Outlet />
        </>

    )
}

export default Header
