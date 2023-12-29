import { counterTypes } from "./codev.types"

const Codev = (props:counterTypes) => {
  return (
    <>
    <h1>Codev</h1>
    <div>{props.count}</div>
    {props.incrementHandler&&(
        <button onClick={props.incrementHandler}>increment</button>
    )}
    {props.decrementHandler&&(
        <button onClick={props.decrementHandler}>decrement</button>
    )}
    </>
  )
}

export default Codev