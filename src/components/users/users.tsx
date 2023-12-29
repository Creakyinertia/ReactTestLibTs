import React, { useEffect, useState } from 'react'
const Users = () => {
    const [data,setData]=useState<string[]>([])
    const [err,seterr]=useState<string|null>(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>setData(data.map((user:{name:string})=>user.name)))
        .catch(()=>seterr("Error fetching user data"))
    })
  return (
    <div>
        <h1>Users</h1>
        {err&&<p>{err}</p>}
        <ul>
            {data.map((user)=>(
                <li key={user}>{user}</li>
            ))}
        </ul>
    </div>
  )
}
export default Users