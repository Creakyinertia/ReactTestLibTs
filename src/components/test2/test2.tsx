import { useState } from "react"

const Test2 = () => {
    const [Data,setData]=useState(0)
    const [Amt,setAmt]=useState(0)
  return (
    <>
        <div>
            <h1>{Data}</h1>
            <button onClick={()=>{setData(Data+1)}}>Add</button>
            <input 
                type="number"
                name="amount"
                value={Amt}
                onChange={(e)=>setAmt(parseInt(e.target.value))}
            />
            <button onClick={()=>{setData(Amt)}}>Set</button>
        </div>
    </>
  )
}

export default Test2