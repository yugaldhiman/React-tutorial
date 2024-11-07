import React from 'react'
import Acomp from './Acomp'
import Bcomp from './Bcomp'
export const UserContext = React.createContext()
const App = () => {
  return (
    <>
      <UserContext.Provider value={" = Ducat India 1"}>
        <Acomp />
      </UserContext.Provider>
      <Bcomp />
    </>
  )
}

export default App