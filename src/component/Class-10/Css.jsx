import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Css() {
  return (
    <>
      <main className='cssMain'>
        <aside className='cssAside'>
          <ul>
            <li> <NavLink to="csscontent">CSS HEDDING</NavLink></li>
          </ul>
        </aside>
        <article className='cssArticle'>
          <Outlet />
        </article>
      </main>
    </>
  )
}

export default Css
