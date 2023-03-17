
const CounterFn = () => {
  const title = 'Counter Fn'
  let counter = 10
  
  const add = () => {
    counter+=1
    console.log(counter, `<=================== counter inside add fn ==================`);
  }
  
  console.log(counter, 'counter from fn')
  
  return (
    <div>
      <h2>{title}</h2>
      <div>{counter}</div>
      <button onClick={() => add()}>+</button>
      <button onClick={() => {}}>-</button>
    </div>
  )
}

export default CounterFn