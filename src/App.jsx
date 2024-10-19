import { Route, Routes } from "react-router-dom"
import Header from "./component/Class-13/Header"
import OutputFile from "./component/Class-13/OutputFile"
import InputFile from "./component/Class-13/InputFile"
import Home from "./component/Class-13/Home"
import EditFile from "./component/Class-13/EditFile"
import DeleteFile from "./component/Class-13/DeleteFile"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/home" element={<Home />} />
          <Route path="/inputFile" element={<InputFile />} />
          <Route path="/outputFile" element={<OutputFile />} />
          <Route path="/editFile/:id" element={<EditFile />} />
          <Route path="/deleteFile/:id" element={<DeleteFile />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
