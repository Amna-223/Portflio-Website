import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"

function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div style={{paddingTop: '64px'}}>
            <Hero />
            <About />
          </div>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App