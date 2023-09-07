import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setInput, addTask, DeleteTask , setCheck ,editTask } from './slice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './App.css'
import counterReducer from "./slice";


function App() {
  const dispatch = useDispatch();
  const init = useSelector((state)=>{return state.todo})
function handleSubmit(e){
  e.preventDefault();
  dispatch(addTask());
}

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder='Please enter your task here' value={init.input} onChange={(e)=>dispatch(setInput(e.target.value))} />
      <button type='submit'>Submit</button>

    </form>
    <ul>
      
    {init.tasks.map((task ,index)=>{ 
      return(
        <li key={index} className={(init.check.includes(index) ? "check": "")} > {task} 
        <EditIcon onClick= {()=> dispatch(editTask(index))}/>
        <DeleteIcon onClick= {()=> dispatch(DeleteTask(index))}/>
        <CheckBoxIcon  onClick={()=> dispatch(setCheck(index))} />
        </li>
      )
    })}
    </ul>
    </>
  )
}

export default App