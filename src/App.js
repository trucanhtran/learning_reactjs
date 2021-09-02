import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  font-weight: bold;
  height: ${(height)=> height.height === 10 ? "10px" : "20px"};cd
`;



const App = () => {
  const [value, setValue] = useState('abc')

  const getValue = (event) => {
    const value = event.target.value;
    setValue(value);
  }

  const a = 10;
  return (
    <Wrap height={a}>
      <form><input type="input" onChange={getValue} /></form>
      {value}
    </Wrap>
  );
}

export default App;
