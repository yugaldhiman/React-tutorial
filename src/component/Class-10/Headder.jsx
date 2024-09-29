import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './Allfile.css'

function Headder() {
    return (
        <>
            <header className='Header'>
                <ul>
                    <li><NavLink to="/html">HTML </NavLink></li>
                    <li> <NavLink to="/css">CSS</NavLink></li>
                </ul>
            </header>
            <Outlet />
        </>
    )
}

export default Headder
