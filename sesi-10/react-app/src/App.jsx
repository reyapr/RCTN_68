import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterCl from './components/CounterCl';

function App() {
  return (
    <div className="App">
      <Counter/> 
      <hr />
      <CounterCl/>
    </div>
  );
}

export default App;
