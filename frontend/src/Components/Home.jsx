import React, { useEffect,useState } from 'react'
import HeroSection from './HeroSection'
import HeroSectionTwo from './HeroSectionTwo'
import { NavLink } from 'react-router-dom'
import LoadingSign from './LoadingSign'

const Home = () => {

  const [loader,setLoader] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    },2000)
  },[])
    // useGSAP(()=>{
    //     gsap.to('.hero', { opacity:1,duration: 2, ease: 'power1.inOut'})
    // })
  return (
    <>
    {loader ? (<LoadingSign/>): (
      <>
      <div className="hero bg-cream min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Welcome to <span className='blogify'>Blogify</span></h1>
      <p className="py-6">
      Discover, share, and grow with our blog platform! Create posts, connect with readers, and explore diverse topics. Join now to start blogging and make your voice heard!
      </p>
     <NavLink to={"/register"}> <button className="btn btn-primary">Get Started</button></NavLink>
    </div>
  </div>
</div>
<div className='Hero-2'>
  <HeroSection/>
</div>
<div className='hero-3'>
  <HeroSectionTwo/>
</div>

      </>
    )}
    
        
 
    </>
  )
}

export default Home