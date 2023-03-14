import React from 'react'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'My Counter',
      num: 10
    }
    // this.setNum = this.setNum.bind(this) -> https://reactjs.org/docs/faq-functions.html
  }
  
  getTitle() {
    return this.state.title
  }
  
  setNum = () => {
    console.log( `<=================== set num triggered ==================`);
    this.setState({
      num: this.state.num + 1
    })
  }
  
  render() {
    console.log(this.state, `<=================== render ==================`);
    return (
      <div>
        <h1>{this.getTitle()}</h1>
        <div>{this.state.num}</div>
        <button onClick={this.setNum}>+</button>
      </div>
    )
  }
}

export default Counter