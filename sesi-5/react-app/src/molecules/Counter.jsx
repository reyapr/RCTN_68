import React from 'react'
import Title from '../atoms/Title'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Counter',
      num: 10
    }
    // this.setNum = this.setNum.bind(this) -> https://reactjs.org/docs/faq-functions.html
  }
  
  getTitle() {
    return this.state.title
  }
  
  decrement = () => {
    this.setState({
      num: this.state.num - 1
    })
  }
  
  increment = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  
  render() {
    return (
      <>
        <Title name={this.getTitle()}/>
        <div>{this.state.num}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    )
  }
}

export default Counter