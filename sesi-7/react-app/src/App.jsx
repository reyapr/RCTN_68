import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import React from 'react';
import Counter2 from './components/Counter2';
import Users from './components/Users';
import ErrorBoundary from './components/ErrorBoundary';
import UsersFn from './components/UsersFn';

class App extends React.Component {
  constructor() {
    super()
    // console.log( `%c <=================== constructor ==================>`, 'color: #4287f5');
    this.state = {
      num1: 0,
      num2: 0,
      isUserShow: true
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
  
  showUser = () => {
    this.setState({
      isUserShow: !this.state.isUserShow
    })
  }
  
  render() {
    // console.log( `%c <=================== render  ==================`, 'color: #42d4f5');
    return (
      <ErrorBoundary>
        <div className="App">
          <button onClick={this.showUser}>{this.state.isUserShow? 'hide' : 'show'}</button>
          {
            this.state.isUserShow && <Users/>
          }
          <hr />
          {
            this.state.isUserShow && <UsersFn/>
          }
          <hr />
          <Counter num={this.state.num1} updateNum={this.updateNum1}/>
          <hr />
          <Counter2 num={this.state.num2} updateNum={this.updateNum2}/>
        </div>
      </ErrorBoundary>
     
    );
  }
}

export default App;
