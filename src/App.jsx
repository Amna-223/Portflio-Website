import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import FeaturedProjects from './sections/FeaturedProject'
import Certificates from './sections/Certificates'

function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div style={{paddingTop: '64px'}}>
            <Hero />
            <About />
            <Skills />
            <FeaturedProjects />
            <Certificates />
          </div>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App