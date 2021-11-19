import logo from './logo.svg';
import './App.css';
import { useState, useCallback} from 'react';
import Content from './Content';

const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(preCount => preCount + 1)
  }, [])

  return (
    <div className="App">
      <Content onIncrease={handleIncrease}/>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
