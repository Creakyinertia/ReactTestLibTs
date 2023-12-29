import { useState } from "react"

const Assigned = () => {
  const[data,setData]=useState('abc')
  return (
    <>
    <h1>Our work is the presentation of our capabilities</h1>
    <h1>Clean desk and clear screen</h1>
    <h1>Living the Seal Life</h1>
    <form>
        <div>
        <label id="Name">Name</label>
        <input type='text' placeholder="Name" aria-labelledby='Name'/>
        </div>
        <div>
        <label id='Password'>Password</label>
        <input type='text' placeholder="Password" aria-labelledby='Password'/>
        </div>
        <button onClick={()=>{}}>Submit</button>
    </form>
    </>
  )
}

export default Assigned