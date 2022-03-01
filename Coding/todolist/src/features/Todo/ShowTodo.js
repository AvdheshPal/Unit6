import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removeTodo } from './TodoSlice'

export const ShowTodo = () => {
    const todolist  = useSelector((state) => state.todos.value)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Results</h1>
        {todolist.map((e,i) => <div key={i}>
           <div style={{'display':'flex','justifyContent': 'center','gap':'10px'}}>
       <div> {e.todo} </div>
       <button onClick={()=>{
           dispatch(removeTodo(e.id));
       }} >Remove</button>
           </div>

   </div>)}
    </div>
  )
}
