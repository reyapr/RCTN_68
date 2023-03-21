import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import React from 'react';
import Counter2 from './components/Counter2';

class App extends React.Component {
  constructor() {
    super()
    // console.log( `%c <=================== constructor ==================>`, 'color: #4287f5');
    this.state = {
      num1: 0,
      num2: 0
    }
  }
  
  componentDidMount = () => {
    // console.log(`%c <=================== did mount ==================>`, 'color: #39ad92');
  }
  
  componentDidUpdate = () => {
    console.log( `<=================== component did update ==================`);
  }
  
  updateNum1 = (num) => {
    this.setState({
      num1: this.state.num1 + num
    })
  }
  
  updateNum2 = (num) => {
    this.setState({
      num2: this.state.num2 + num
    })
  }
  
  render() {
    // console.log( `%c <=================== render  ==================`, 'color: #42d4f5');
    return (
      <div className="App">
        <Counter num={this.state.num1} updateNum={this.updateNum1}/>
        <hr />
        <Counter2 num={this.state.num2} updateNum={this.updateNum2}/>
      </div>
    );
  }
}

export default App;
