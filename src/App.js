import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Content from './Content';

const App = () => {
  const [value, setValue] = useState('abc')

  const getValue = (event) => {
    const value = event.target.value
    setValue(value);
  }

  return (
    <div className="App">
      <button onClick={() => console.log(Math.random(1))}>Click</button>
      <input type="text" onChange={getValue} placeholder="Nhập vào đây" />
      <Content value={value} />
    </div>
  );
}

export default App;
