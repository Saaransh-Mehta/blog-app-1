import React from 'react'

const HeroSection = () => {
  return (
    <>
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Create Blog Now</h1>
      <p className="py-6">
      Find your voice with our easy-to-use blog app.
Share your thoughts, connect with readers, and build your brand.
Register now and start blogging!
      </p>
    </div>
    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Start Blogging now</h2>
    <p>Read more about the blog and blogify</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div>
  </div>
</div>
    </>
  )
}

export default HeroSection