import React, { useState } from 'react'
import { Home, RefreshCcw } from 'lucide-react'

const NotFound = () => {
  const [isRotating, setIsRotating] = useState(false)

  const handleRotate = () => {
    setIsRotating(true)
    setTimeout(() => setIsRotating(false), 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        <h1 className="text-9xl font-extrabold text-gray-700">404</h1>
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Oops! Page not found</h2>
        <p className="mt-2 text-lg text-gray-600">The page you're looking for doesn't seem to exist.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/"
            className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </a>
          <button
            onClick={handleRotate}
            className={`flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 transition-all duration-300 ${
              isRotating ? 'animate-spin' : ''
            }`}
          >
            <RefreshCcw className="mr-2 h-5 w-5" />
            Try Again
          </button>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            If you think this is a mistake, please{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              contact support
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound