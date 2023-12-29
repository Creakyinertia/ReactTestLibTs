import { useState } from "react"


const Counter = () => {
    const [Data,setData]=useState(0);
    return (
        <>
            <h1>The count is:{Data}</h1>
            <button onClick={()=>setData(Data+1)}>Click</button>
        </>
    )
}

export default Counter
