import React, { useEffect, useState } from 'react'

const useFetchData = () => {

  const [user,setUser ] = useState(null);
   useEffect(()=>{
    const response = fetch("http://localhost:3000/api/user/get-user",{
      method:"GET",
      credentials:true
    }).then((res)=>res.json())
    .then((data)=>setUser(data.id))

   })
}

export default useFetchData