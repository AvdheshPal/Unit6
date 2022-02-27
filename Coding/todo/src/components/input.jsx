import React , {useContext,useState}from 'react'
import {Context} from '../Context/Context'

export const Input = () => {
    const {data,setData} = useContext(Context)
    const [inp,setInp] = useState();
    
    const handleinp = (e)=>{
        const {name,value} = e.target;
        setInp({
                ...inp,
            [name]:value
        })
    }
  return (<>
  <div>
      <input type="text" name="Text" onChange={handleinp} />
      <button onClick={()=>{
          setData([...data,inp.Text])
      }}
      >Add</button>
  </div>
  </>)
}
