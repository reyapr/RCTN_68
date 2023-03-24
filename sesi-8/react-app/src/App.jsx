import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { StyledTitle, Title } from './components/Title';

function App() {
  return (
    <div className='App'>
      <StyledTitle primary padding='15px'>Counter Styled Title</StyledTitle>
      <Title>Counter App</Title>
      <Counter/>
    </div>
  );
}

export default App;
