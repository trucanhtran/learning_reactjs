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
    name: "Javascipt"
  },
  {
    id: 3,
    name: "React JS"
  }
]

const App = () => {

  const [checked, setChecked] = useState([])
  console.log(checked);

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked){
        //Uncheck
        return checked.filter(item => item !== id)
      } else {
        return [...prev,id]
      }
    });

  }

  const handleSubmit = () => {
    console.log({ids: checked})
  }
  return (
    <div className="App">
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
