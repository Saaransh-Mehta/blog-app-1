
import React from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./Components/Home"
import Register from "./Components/Register"

function App() {


  return (
    <Router>
   
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
   </Routes>

    </Router>
  )
}

export default App
