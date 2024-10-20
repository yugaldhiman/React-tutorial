import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import OutputFile from "./OutputFile"
import InputFile from "./InputFile"
import Home from "./Home"
import EditFile from "./EditFile"
import DeleteFile from "./DeleteFile"

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
