import Header from "./component/Class-5/blog/Header"
import Navigation from "./component/Class-5/blog/Navigation"
import Article from "./component/Class-5/blog/Article"
import Aside from "./component/Class-5/blog/Aside"
import Footer from "./component/Class-5/blog/Footer"


import './App.css'

function App() {

  return (
    <>
      <Header title="Ducat India" />
      <Navigation />
      <main>
        <Article>
          <h4 className="new">New</h4>
        </Article>
        <Aside />
      </main>
      <Footer />
    </>
  )
}

export default App
