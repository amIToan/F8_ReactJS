import logo from './logo.svg';
import './App.css';
import { useReducer, useState, useRef } from 'react';
// import Content from './content';
// const courses = [
//   {
//     id:1,
//     name: 'HTML,CSS',
//   },
//   {
//     id:2,
//     name: "Javascript"
//   },
//   {
//     id:3,
//     name: 'ReactJs'
//   }
// ]
// function App() {
//   const [checked, setCheck] = useState(1);
//   const handleSubmit = () => {
//     console.log({id : checked})
//   }
//   return (
//     <div className="App">
//       { courses.map( course => {
//         return (<div key = {course.id}>
//           <input type="radio" 
//           checked={checked === course.id}
//           onChange = {() => setCheck(course.id)}
//           />
//           {course.name}
//         </div>)
//       } )}
//     <button onClick= {handleSubmit}>Change Value</button>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div className="App">
//       <Content />
//     </div>
//   )
// }
//////////////////////////USER REDUCER() //////////////////
// 1.Initial State
// const initState = {
//   job: "",
//   jobs : []
// };
// 2. Actions
// const set_job = "Set_Job"
// const add_job = "Add_Job";
// const delete_job = "delete_job";
// const setJob = payload => {
//   return {
//     type: set_job,
//     payload
//   }
// };
// const addJob = payload => {
//   return {
//     type: add_job,
//     payload
//   }
// }
// const deleteJob = payload => {
//   return {
//     type: delete_job,
//     payload
//   }
// }
// 3. Reducer
// const reducer = (state, action) => {
//   console.log('Action', action)
//   console.log('Pre state: ', state)
//   let newState;
//   switch(action.type) {
//     case set_job:
//       newState = {
//         ...state,
//         job: action.payload
//       }
//       break;
//       case add_job:
//         newState = {
//           ...state,
//           jobs: [...state.jobs, action.payload]
//         }
//         break;
//         case delete_job:
//           const newJobs = [...state.jobs]
//           newJobs.splice(action.payload, 1)
//           newState = {
//             ...state,
//             jobs: newJobs
//           }
//           break;
//       default:
//         throw new Error('you typing wrong values')
    
//   };
//   console.log('News tate: ', newState)
//   return newState
// }
// 4. Dispatch
// function App() {
//   const [state, dispatch] = useReducer(reducer, initState)
//   const { job, jobs} = state
//   const inputRef = useRef()
//   const handleSubmit = () => {
//     dispatch(addJob(job))
//     dispatch(setJob(" "))
//     // inputRef.current.value = " "
//     inputRef.current.focus()
//     console.log(inputRef.current)
//   }
//   return(
//     <div style={{ padding: '20px'}}>
//       <h3>ToDoList</h3>
//       <input 
//         ref={inputRef} 
//         placeholder='Enter something...'
//         onChange={ e=> {
//           dispatch(setJob(e.target.value))
//         }}
//       />
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         { jobs.map( (element, index) => (
//           <li key={index}>{element}
//            <span onClick={ () => dispatch(deleteJob(index))}> &times;</span>
//            </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
//////////////////////////////************************* */
// 1. Create Context 
// 2. Provider
// 3. Consumer
import "./App.css"
// import Content1 from './content1';
// import { ThemeContext} from './ThemeProvider'
// import { useContext} from 'react'
import { useStore, actions} from './store'
function App() {
  const [ state, dispatch] = useStore()
  const { todos, todoInput} = state //state ban dau la iniState là 1 object.
  const inputRef = useRef()
  const [index, setIndex] = useState()
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput)) // dính luôn add và trả ra 1 [] mới
    inputRef.current.focus()
    inputRef.current.value = "Toan dz"
    const emptyValue = inputRef.current.value
    dispatch(actions.setToDoInput(emptyValue))
  } 
  return (
    <div style={{padding: 100}}>
      <input 
        ref={inputRef}
        value={ state.todoInput} // dính luôn case set và trả ra action.payload
        placeholder='Enter something...'
        onChange={ e => {
          dispatch(actions.setToDoInput(e.target.value)) // hàm dispatch truyền vào reducer(chính là 1 object action)
        }}
        onKeyUp={ e => {
          e.key === 'Enter'   &&  dispatch(actions.editToDo(index))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((ele, index) => {
        return (
          <li key={index}
           onDoubleClick={() => {
            dispatch(actions.setToDoInput(ele))
             setIndex(index)
             inputRef.current.focus()
           }}
          >{ele}
          <span onClick={ () => dispatch(actions.deleteToDo(index))}> &times;</span>
          </li>
        )
      })}
    </div>
  )
}
export default App;
// tóm lại thằng này là thằng nhận
