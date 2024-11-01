import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import sample from '../Data/sample.json'

const BlogSection = () => {
    useGSAP(()=>{
        gsap.to(".headText", {opacity:1,duration:2,ease:"sine.inOut"})
    })
  return (
    <>
    <div className='bg-base-200'>
    <div>
        .
        <p className='headText opacity-0 text-3xl mt-5 flex justify-center'>Recent Blogs Posted</p>
    </div>
    <div className='mt-10 card-show grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
    {sample.map((data)=>{
        return(
            <div className="card bg-base-200 w-96 shadow-xl">
  <figure>
    <img
      src={data.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.description}</p>
    <div className="card-actions justify-center mt-2">
      <button className="btn btn-primary ">Learn More</button>
    </div>
  </div>
</div>
        )
    })}

    </div>
   

    </div>
    </>
  )
}

export default BlogSection