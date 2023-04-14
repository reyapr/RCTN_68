import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
