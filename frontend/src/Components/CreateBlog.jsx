import React, { useState } from 'react'

const CreateBlog = () => {
  const [title,setTitle] = useState('')
  const [description , setDescription] = useState('')
  const [content,setContent] = useState('')

  const handleBlog = async(e)=>{
    e.preventDefault();
    try{
    await fetch('http://localhost:3000/api/blog/create',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        title,
        description,
        content
      })
    }).then((res)=>res.json())
    .then((data)=>console.log(data))

    
  }catch(err){
    throw new Error(err)
  }

  }

  return (
    <>
    <div className="hero bg-cream min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Start Today by creating Blog!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" onChange={(e)=> setTitle(e.target.value)} placeholder="Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="Description" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <input type="text" onChange={(e)=>setContent(e.target.value)} placeholder="Content" className="input input-bordered h-[20vh]" required />
          <label className="label-text">
            <a href="#" className="label-text-alt link link-hover">generate random text via AI?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleBlog} className="btn btn-primary">Create Blog</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default CreateBlog