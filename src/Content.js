import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

const Content = ({value}) => {

  const [title, setTitle] = useState('')

  useEffect(() => {
    console.log("Mount")
  })


  return (
    <div className="Content">
      <div>{value}</div>
    </div>
  );
}

export default Content;
