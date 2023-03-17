import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import CounterFn from './components/CounterFn';

function App() {
  return (
    <div className="App">
      <Counter/>
      <CounterFn/>
    </div>
  );
}

export default App;
