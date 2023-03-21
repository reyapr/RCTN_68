import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <div style={{ border: '1px dotted cyan', margin: '10px' }}>
        <h1>Counter - 1</h1>
        <h3>{this.props.num}</h3>
        <button onClick={() => this.props.updateNum(1)}>+</button>
        <button onClick={() => this.props.updateNum(-1)}>-</button>
      </div>
    )
  }
  
}

export default Counter