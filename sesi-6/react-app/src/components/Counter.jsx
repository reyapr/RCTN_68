import React from 'react'
import { Title } from './Title'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  
  updateCounter = (val) => {
    this.setState({
      counter: this.state.counter + val
    })
  }
  
  triggerUpdateCounter = () => this.updateCounter(1)
  
  render() {
    console.log(`render ${this.state.counter}`)
    const title = 'Counter Class'
    return (
      <div>
        <Title title={title}/>
        <div>{this.state.counter}</div>
        <button onClick={this.triggerUpdateCounter}>+</button>
        <button onClick={() => this.updateCounter(-1)}>-</button>
      </div>
    )
  }
}

export default Counter