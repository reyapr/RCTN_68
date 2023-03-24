
import styles from './styles.module.css'

const defaultTextCounterColor = { color: 'goldenrod'}

const Counter = () => {
  return (
    <div className={`${styles.default_bg} py-2`} >
      <h3 style={defaultTextCounterColor}>0</h3>
      <button className='btn btn-success me-2'>+</button>
      <button className='btn btn-danger'>-</button>
    </div>
  )  
}

export default Counter