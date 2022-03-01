import React ,{ useState } from 'react'
import { nanoid } from 'nanoid'
import { useSelector , useDispatch } from 'react-redux'
import { addTodo } from './TodoSlice'
import { ShowTodo } from './ShowTodo'

export const Todo = () => {
    const [inp,setInp] = useState({})

    const dispatch = useDispatch();

    const todolist  = useSelector((state) => state.todos.value)

    const handleinp = (e) => {
        const {name , value} = e.target;
        setInp({
            ...inp,
            [name] : value,
             "id" : nanoid(10)
        })
    }

    const Addfun = () =>{
        dispatch(addTodo(inp))
    }

    return (<>

    <h1>Todo</h1>
    <input name='todo' type="text" onChange={handleinp}/>
    <button onClick={Addfun}  > Add </button>
    <ShowTodo/>
    </>)
}
