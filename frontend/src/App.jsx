
import React from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./Components/Home"
import Register from "./Components/Register"
import BlogSection from "./Components/BlogSection"
import CreateBlog from "./Components/CreateBlog"
import Footer from "./Components/Footer"

function App() {


  return (
    <Router>
   
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/blogs" element={<BlogSection/>}/>
    <Route path="/create-blog" element={<CreateBlog/>}/>
   </Routes>
    <Footer/>
    </Router>
  )
}

export default App
