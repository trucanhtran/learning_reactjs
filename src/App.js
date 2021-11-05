import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const courses = [
  {
    id: 1,
    name: "HTML, CSS"
  },
  {
    id: 2,
    name: "Javascript"
  },
  {
    id: 3,
    name: "React Js"
  }
]

const App = () => {

  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [checked, setChecked] = useState("")

  const handleSubmit = () => {
    console.log({name, email})
  }

  const handleRegister = () => {
    console.log({id: checked})
  }

  return (
    <div className="App">
      <input
        onChange = {e => setName(e.target.value)}
        value={name}
      />
      <input
        onChange = {e => setEmail(e.target.value)}
        value={email}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {courses.map(course =>(
          <div key={course.id}>
          <input
            type="radio"
            checked = {checked === course.id}
            onChange = {() => setChecked(course.id)}
          />
          {course.name}
          </div>))

        }
      </div>
      <button onClick={handleRegister}>Submit</button>
    </div>
  );
}

export default App;
