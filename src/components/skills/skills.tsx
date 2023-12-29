import { skillProps } from './skills.types'
import { useState,useEffect } from 'react'

const Skills = (props:skillProps) => {
    const [isLoggedIn,setisLoggedIn]=useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setisLoggedIn(true)
        },1001)
    },[])

    const {skills}=props
  return (
    <div>
        <ul>
            {skills.map((skill)=>{
               return <li key={skill}>{skill}</li>
            })}
        </ul>
        {isLoggedIn?(
            <button onClick={()=>setisLoggedIn(false)}>Start Learning</button>
        ):(
            <button onClick={()=>setisLoggedIn(true)}>Login</button>
        )}
       
    </div>
  )
}

export default Skills