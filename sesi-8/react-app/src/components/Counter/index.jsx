
import styles from './styles.module.css'

const defaultTextCounterColor = { color: 'goldenrod'}

const Counter = () => {
  return (
    <div className={styles.default_bg}>
      <h3 style={defaultTextCounterColor}>0</h3>
      <button style={defaultTextCounterColor}>+</button>
      <button style={defaultTextCounterColor}>-</button>
    </div>
  )  
}

export default Counter