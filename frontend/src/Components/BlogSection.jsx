import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import sample from '../Data/sample.json'
import HorizontalCard from './HorizontalCard'

const BlogSection = () => {
    useGSAP(()=>{
        gsap.to(".headText", {opacity:1,duration:2,ease:"sine.inOut"})
    })
  return (
    <>
    <div className='bg-cream'>
    <div>
        .
        <p className='headText opacity-0 text-3xl mt-5 flex justify-center'>Recent Blogs Posted</p>
    </div>
    <div className='mt-10 card-show grid place-items-center'>
    {sample.map((data,key)=>{
        return(
          <div className='m-5 w-3/4 rounded-lg grid place-items-center '>
            <div key={key} className="w-full hover:bg-slate-400 h-40 flex overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="w-1/3 relative">
        <img
          src=""
          alt="Image"
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-blue-600">{data.author}</span>
            <span className="text-xs text-gray-500">{data.date}</span>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{data.title}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{data.description}</p>
        </div>
        <div className="flex justify-end items-center">
          <button 
            className="text-blue-600 font-semibold flex items-center hover:underline"
            aria-label={`Read more about ${data.title}`}
          >
            Read More
            <svg 
              className="ml-1 h-4 w-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </button>
        </div>
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