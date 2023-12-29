type greetTypes={
    name?:string
}

export const Greet = (props:greetTypes) => {
  return (
    <div>Hello {props.name}</div>
  )
}
