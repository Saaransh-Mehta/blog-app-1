import React from 'react'

export default function HorizontalCard({
  title = "Exploring the Future of Web Development",
  description = "Dive into the latest trends and technologies shaping the world of web development in 2024 and beyond.",
  imageUrl = "https://via.placeholder.com/240x160",
  category = "Technology",
  readTime = "5 min read"
}) {
  return (
    <div className="w-full h-40 flex overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="w-1/3 relative">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-blue-600">{category}</span>
            <span className="text-xs text-gray-500">{readTime}</span>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{title}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>
        <div className="flex justify-end items-center">
          <button 
            className="text-blue-600 font-semibold flex items-center hover:underline"
            aria-label={`Read more about ${title}`}
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
  )
}