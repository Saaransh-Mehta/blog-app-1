import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const HeroSectionTwo = () => {
  // useGSAP(()=>{
  //   gsap.to('.hero-text', { opacity:1,duration: 2, ease: 'power1.inOut', yoyo: true, repeat: -1 })
  // })
  return (
    <>
    
   <div className='hero bg-cream min-h-screen'>
      <div className='grid grid-rows-2'>
      <div>
        <p className='text-3xl hero-text flex justify-center text-slate-900 font-bold'>What is Blogify?</p>
      </div>
    <div className='grid grid-cols-3 gap-14'>
    <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">AI</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title flex justify-center">Easy-to-Use Interface</h2>
   <ul>
    <li><span className='font-bold'>Intuitive Editor:</span> Create beautiful blog posts without any coding knowledge.</li>
    <li></li>
    <li></li>
   </ul>
  
  
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
    </div>
    </div>
   </div>
    </>
  )
}

export default HeroSectionTwo