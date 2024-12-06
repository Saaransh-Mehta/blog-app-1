
  import React, { useEffect, useState } from 'react'
  import { 
    HomeIcon, 
    BellIcon, 
    CogIcon, 
    PencilSquareIcon, 
    UsersIcon, 
    ChevronDownIcon 
  } from '@heroicons/react/24/outline'
  import LoadingSign from './LoadingSign'
  import { NavLink, useNavigate } from 'react-router-dom'
  import { Tooltip as ReactTooltip } from 'react-tooltip'
  import avatar from '../Images/avatar-1.png'



   
  export default function BlogDashboard() {
    const [postTitle, setPostTitle] = useState('')
    const [postContent, setPostContent] = useState('')
    const [desc , setDesc] = useState('')
    const [loader, setLoader ] = useState(true)
    const [user,setUser] = useState(null)
    const [posts,setPosts] = useState(null)
    const [keys,setKeys] = useState(null)

    const navigate = useNavigate()
    
    useEffect(()=>{
      setTimeout(()=>{
        setLoader(false)
      },2500)

    },[])

    useEffect(()=>{
      const response = fetch("http://localhost:3000/api/user/get-user",{
        method:"GET",
        credentials:'include'
      }).then((res)=>res.json())
      .then((data)=>setUser(data.data))
      
      
    },[])

    
    const handleDelete = async()=>{
      console.log("Delete start")
      

    }

    const handleEdit = async()=>{
      console.log("Edit start")
    }

    useEffect(()=>{
      const post = fetch("http://localhost:3000/api/blog/all-post",{
        method:"GET",
        credentials:'include'
      }).then((res)=>res.json())
      .then((data)=>setPosts(data.data))
    },[])
  
    const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
        fetch('http://localhost:3000/api/blog/create', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: postTitle,
            content: postContent,
            description:desc
          })

        })
        .then((res)=> res.json())
        .then((data)=>console.log(data))
        setPostContent('')
        setPostTitle('')
      } catch (error) {
        console.log(error)
      }
    }
    const handleQuickPost = (e) => {
      e.preventDefault()
      console.log('Quick post submitted:', { postTitle, postContent })
    }
    const logout = async()=>{
      await fetch("http://localhost:3000/api/user/logout",{
        method:"POST",
        credentials:"include"
      })
      navigate("/")
    }
   

    return (
      <>
      {
        loader ? (<LoadingSign/>) : (
          <div className="flex flex-col min-h-screen bg-cream">
          <header className="bg-white shadow">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <HomeIcon className="h-8 w-8 text-black" />
                  </div>
                  <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <NavLink to={"/dashboard"} className="border-black text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Dashboard
                    </NavLink>
                    <NavLink to={"/user/posts"} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Posts
                    </NavLink>
                    <NavLink to={"/user/blogs"} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      BLOGS
                    </NavLink>
                    <NavLink to={"/dashboard"} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Media
                    </NavLink>
                  </nav>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button onClick={logout} className="btn btn-outline btn-error">Logout</button>
                  <button type="button" className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">View notifications</span>
                    <div className="indicator">
                        <span className="indicator-item badge badge-xs badge-neutral"></span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </button>
                  <button type="button" className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open settings</span>
                    <CogIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="ml-3 relative">
                    <div>
                      <button type="button" className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        <img data-tooltip-id='tooltip' data-tooltip-content={user.email} className="h-8 w-8 rounded-full" src={avatar} alt="" />
                        <ReactTooltip id='tooltip' place="bottom-end" type="dark" effect="float" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
  
          <main className="flex-1 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
              
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Total Posts Card */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <PencilSquareIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Total Posts</dt>
                          <dd className="flex items-baseline">
                            <div className="text-2xl font-semibold text-gray-900">{user.posts.length + 1}</div>
                            
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Total Views Card */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <UsersIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Total Views</dt>
                          <dd className="flex items-baseline">
                            <div className="text-2xl font-semibold text-gray-900">0</div>
                            
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* New Comments Card */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <BellIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">New Comments</dt>
                          <dd className="flex items-baseline">
                            <div className="text-2xl font-semibold text-gray-900">18</div>
                            <div className="ml-2 flex items-baseline text-sm font-semibold text-yellow-600">
                              12 need moderation
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Recent Posts */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Posts</h3>
                    <div className="mt-5 divide-y divide-gray-200">
                      {posts.map((post, index) => (
                        <div key={index} className="py-4 flex justify-between items-center" >
                          <div className="text-sm text-gray-900">{post.title}</div>
                          <div className='flex gap-3'>
                          <button onClick={handleEdit}  className="px-2 py-1 text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Edit
                          </button>
                          <button  onClick={handleDelete} className="px-2 py-1 text-xs font-medium rounded-md text-red-700 bg-red-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            Delete
                          </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        View All Posts
                      </button>
                    </div>
                  </div>
                </div>
  
                {/* Quick Post */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Post</h3>
                    <form onSubmit={handleQuickPost} className="mt-5 space-y-4">
                      <div>
                        <label htmlFor="post-title" className="block text-sm font-medium text-gray-700">
                          Title
                        </label>
                        <input
                          type="text"
                          name="post-title"
                          id="post-title"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Enter post title"
                          value={postTitle}
                          onChange={(e) => setPostTitle(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="post-content" className="block text-sm font-medium text-gray-700">
                          Content
                        </label>
                        <textarea
                          id="post-content"
                          name="post-content"
                          rows={3}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Write your post content here..."
                          value={postContent}
                          onChange={(e) => setPostContent(e.target.value)}
                        ></textarea>
                      </div>
                      <div>
                        <label htmlFor="post-content" className="block text-sm font-medium text-gray-700">
                          Content
                        </label>
                        <textarea
                          id="post-desc"
                          name="post-desc"
                          rows={3}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Write your post content here..."
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Publish Post
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        )
      }
     
      </>
    )
  }