import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const courses = [
  {
    id:1,
    name: 'HTML,CSS',
  },
  {
    id:2,
    name: "Javascript"
  },
  {
    id:3,
    name: 'ReactJs'
  }
]
function App() {
  const [checked, setCheck] = useState(1);
  const handleSubmit = () => {
    console.log({id : checked})
  }
  return (
    <div className="App">
      { courses.map( course => {
        return (<div key = {course.id}>
          <input type="radio" 
          checked={checked === course.id}
          onChange = {() => setCheck(course.id)}
          />
          {course.name}
        </div>)
      } )}
    <button onClick= {handleSubmit}>Change Value</button>
    </div>
  );
}

export default App;
