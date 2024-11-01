import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Home = () => {
    useGSAP(()=>{
        gsap.to('.blogify', { opacity:1,duration: 2, x:100,y:200,ease: 'power1.inOut' })
    })
  return (
    <>
    
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Welcome to <span className='blogify opacity-0'>Blogify</span></h1>
      <p className="py-6">
      Discover, share, and grow with our blog platform! Create posts, connect with readers, and explore diverse topics. Join now to start blogging and make your voice heard!
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        
 
    </>
  )
}

export default Home