import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { Title } from './components/Title';

function App() {
  return (
    <div className='App'>
      <Title>Counter App</Title>
      <Counter/>
    </div>
  );
}

export default App;
