
import React from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router,Route,Routes , useLocation} from "react-router-dom"
import Home from "./Components/Home"
import Register from "./Components/Register"
import BlogSection from "./Components/BlogSection"
import CreateBlog from "./Components/CreateBlog"
import Footer from "./Components/Footer"
import Login from "./Components/Login"
import DashBoard from "./Components/DashBoard"
import Posts from "./Components/Posts"
import NotFound from "./Components/NotFound"

function App() {
const location = useLocation();
  

  return (

    <>

    {location.pathname !== "/dashboard" && <Navbar/>}
 
   
  
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/blogs" element={<BlogSection/>}/>
    <Route path="/create-blog" element={<CreateBlog/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/dashboard" element={<DashBoard/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route Component={NotFound}/>
   </Routes>
    <Footer/>
    
    </>
  )
}

function MainApp(){
  return(
    <Router>
      <App/>
    </Router>
  )
}

export default MainApp
