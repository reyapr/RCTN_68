import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';
import Auth from './components/Auth'

function App() {
  return (
    <div className="App">
      <Auth/>
      <hr />
      <Counter/>
      <hr />
      <Users/>
    </div>
  );
}

export default App;
