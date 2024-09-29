import React from 'react'
import { Outlet } from 'react-router-dom'

function Page2() {
  return (
    <div>
      <h1 className='homeH1'>page 2</h1>

      <Outlet/>
    </div>
  )
}

export default Page2
