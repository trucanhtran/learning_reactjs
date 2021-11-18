import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import Content from './Content';

const App = () => {
  const [count, setCount] = useState(60)

  let timeId = useRef()
  const preCount = useRef()

  useEffect(() => {
    preCount.current = count
  },[count])

  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount(prevCount => prevCount -1)
    },1000)

    console.log('Start -> ', timeId.current)
  }

  const handleStop = () => {
    clearInterval(timeId.current)

    console.log('Stop -> ', timeId.current)
  }

  console.log(count, preCount.current);
  return (
    <div className="App">
      <h1>{count}</h1>
     <button onClick={handleStart}>Start</button>
     <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
