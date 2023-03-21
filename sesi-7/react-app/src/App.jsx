import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    console.log( `%c <=================== constructor ==================>`, 'color: #4287f5');
    this.state = {
      num: 0
    }
  }
  
  componentDidMount = () => {
    console.log(`%c <=================== did mount ==================>`, 'color: #39ad92');
  }
  
  shouldComponentUpdate = () => {
    console.log( `<=================== should component update ==================`);
    return false
  }
  
  componentDidUpdate = () => {
    console.log( `<=================== component did update ==================`);
  }
  
  updateNum = (num) => {
    this.setState({
      num: this.state.num + num
    })
  }
  
  render() {
    console.log( `%c <=================== render  ==================`, 'color: #42d4f5');
    return (
      <div className="App">
        <Counter/>
      </div>
    );
  }
}

export default App;
