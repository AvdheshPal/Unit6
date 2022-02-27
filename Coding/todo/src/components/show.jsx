import React , {useContext,useState} from 'react'
import { Context } from '../Context/Context';

export const Show = () => {
    const {data,setData} = useContext(Context)
  return (<>
   {data.map((e,i) => <div key={i}>
       <div>{e}</div>
   </div>)}
  </>)
}
