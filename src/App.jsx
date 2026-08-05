import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"

function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div style={{paddingTop: '64px'}}>
            <Hero />
          </div>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App