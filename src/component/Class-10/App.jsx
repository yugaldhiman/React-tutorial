import { Route, Routes } from "react-router-dom"
import Headder from './component/Class-10/Headder'
import Html from './component/Class-10/Html'
import Css from './component/Class-10/Css'
import HtmlContent from "./component/Class-10/HtmlContent"
import CssContent from "./component/Class-10/CssContent"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Headder />}>
          <Route path="/html" element={<Html />}>
            <Route path="htmlcontent" element={<HtmlContent />} />
          </Route>
          <Route path="/css" element={<Css />}>
            <Route path="csscontent" element={<CssContent />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
