import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {useState} from 'react';

const Main = styled.div`
  border: 1px solid #ccc;
  width: 500px;
  min-height: 200px
`;

const Content = styled.div`
  color: #ed6a6a;
`;

const styleInput = styled.input`
  border: 1px solid #ccc;
`;



const App = ()=>{
  const [inputValue, setInputValue] = useState("Nội dung hiển thị ở đây");

  const getInputValue = (event)=>{
    setInputValue(event.target.value);
  }

  return (
    <Main>
      <form>
        <input type="input" value="Nhập nội dung ở đây..." onchange={getInputValue}/>
      </form>
      <Content>{inputValue}</Content>
    </Main>
  );
}

export default App;
