import React from 'react'
import Acomp from './component/Class-15/multiComp/Acomp'
import Bcomp from './component/Class-15/multiComp/Bcomp'
export const UserContext = React.createContext()
const App = () => {
  return (
    <>
      <UserContext.Provider value={" = Ducat India 1"}>
        <Acomp/>
      </UserContext.Provider>
      <Bcomp />
    </>
  )
}

export default App
