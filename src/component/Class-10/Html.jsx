import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Allfile.css'

function Html() {


  return (
    <>
      <main className='htmlMain'>
        <aside className='htmlAside'>
          <ul>
            <li> <NavLink to="htmlcontent">HTML HEDDING</NavLink></li>
          </ul>
        </aside>
        <article>
          <Outlet />
        </article>
      </main>
    </>
  )
}

export default Html
