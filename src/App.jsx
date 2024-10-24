import React from 'react'
import Acomp from './component/Class-15/multiComp/Acomp'
import Bcomp from './component/Class-15/multiComp/Bcomp'

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
