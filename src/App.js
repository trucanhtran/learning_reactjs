import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Content from './Content';

const App = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toogle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
