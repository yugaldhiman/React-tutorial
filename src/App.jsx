import {Route ,Routes } from "react-router-dom"
import Header from "./component/Class-6/Header"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/Page1" element={<h1>Page 1</h1>}></Route>
        <Route path="/Page2" element={<h1>Page 2</h1>}></Route>
        <Route path="/Page3" element={<h1>Page 3</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
