import React from 'react'
import Acomp from './Acomp'
import Bcomp from './Bcomp'

const App = () => {
  let data = " = Ducat India"
  return (
    <>
      <Acomp data={data}/>
      <Bcomp data={data}/>
    </>
  )
}

export default App
