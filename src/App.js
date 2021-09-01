import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('abc')

  const getValue = (event) => {
    const value = event.target.value;
    setValue(value);
  }

  return (
    <div className="App">
      <form><input type="input" onChange={getValue} /></form>
      {value}
    </div>
  );
}

export default App;
