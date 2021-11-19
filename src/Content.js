import logo from './logo.svg';
import './App.css';
import {memo} from 'react';
import { useCallback } from 'react';

const Content = ({onIncrease}) => {

  console.log('re-render')

  return (
    <>
      <h2>Hello</h2>
      <button onClick={onIncrease}>Click me</button>
    </>
  );
}

export default memo(Content);
