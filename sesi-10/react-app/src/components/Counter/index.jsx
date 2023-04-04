import { useSelector, useDispatch } from 'react-redux'
import { dynamicIncrement } from './counterSlice'

const Counter = () => {
  const selector = useSelector((state) => {
    return {
      ...state.counter
    }
  })
  const dispatch = useDispatch()
  
  return (
    <div>
      <h1>{selector.title}</h1>
      <h2>{selector.count}</h2>
      {/* dynamicIncrement({ value: 5 }) = {type: 'incrmeent', payload: { value: 5}} */}
      <button onClick={() => dispatch(dynamicIncrement({ value: 5 }))}>+</button>
      <button onClick={() => dispatch(dynamicIncrement({ value: -5 }))}>-</button>
    </div>
  )
}

export default Counter