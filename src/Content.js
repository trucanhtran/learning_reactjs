import logo from './logo.svg';
import './App.css';
import {useLayoutEffect} from 'react'
import {useRef, useState} from 'react';

const Content = () => {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    if (count > 3)
    setCount(0)
  }, [count])

  const handleRun = () => {
    setCount(count +1 )
  }
  return (
    <div className="Content">
     <h1>{count}</h1>
     <button onClick={handleRun}>Run</button>
    </div>
  );
}

export default Content;
