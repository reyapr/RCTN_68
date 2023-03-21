import React from 'react'

class Counter2 extends React.Component {
  
  shouldComponentUpdate(nextProps) {
    /**
     * jika props num-nya berubah, makan component harus diupdate
     */
    console.log(this.props, `<=================== this.props.num ==================`);
    console.log(nextProps, `<=================== nextProps ==================`);
    if(this.props.num !== nextProps.num) {
      return true
    }
    return false 
  }
  
  render() {
    return (
      <div style={{ border: '1px dotted cyan', margin: '10px' }}>
        <h1>Counter - 2</h1>
        <h3>{this.props.num}</h3>
        <button onClick={() => this.props.updateNum(1)}>+</button>
        <button onClick={() => this.props.updateNum(-1)}>-</button>
      </div>
    )
  }
  
}

export default Counter2