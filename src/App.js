import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {useState} from 'react';

const Main = styled.div`
  border: 1px solid #ccc;
  width: 500px;
  min-height: 200px
`;

const styleInput = styled.input`
  border: 1px solid #ccc;
`;



const App = ()=>{
  const [inputValue, setInputValue] = useState("Nội dung hiển thị ở đây");

  return (
    <Main>
      <styleInput type="text" value="Nhập chữ ở đây"/>
    </Main>
  );
}

export default App;
