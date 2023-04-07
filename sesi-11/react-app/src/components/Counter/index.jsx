import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "./slice";
  
const Counter = () => {
  const selector = useSelector((state) => ({
    ...state.counter
  }) )
  const dispatch = useDispatch()
  
  return (
    <div>
      <h1>Counter</h1>
      <h2>{selector.count}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter