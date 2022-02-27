import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { increase } from './counterSlice'

export const Counter = () => {
    const count = useSelector((state) => state.counter.counterValue)
    const dispatch = useDispatch()
  return (<>
    <h1 > Counter  :  {count} </h1>
    <button style={{'marginRight':'10px'}} onClick={()=>{ dispatch(increase(1))}} >+</button>
    <button onClick={()=>{ dispatch(increase(-1))}} >-</button>
    </>
  )
}
