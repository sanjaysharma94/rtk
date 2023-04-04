
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , incrementByAmount } from './Redux/reducer'
import { changeName ,fetchFakeApi, fetchjsonApi } from './Redux/nameReducer';
import {useEffect, useState } from "react"
import { fetchData} from "./Redux/action"

function App() {
  const [payload, setPayload] = useState("")
  const [name , setName] = useState("")

  const count = useSelector((store) => store.counter.value)
  const Name = useSelector((store) => store.name.name) 
  const result = useSelector((store) => store.name.fakedata) 
  const dispatch = useDispatch()

  const handleName = (e)=>{
      setName(e.target.value);
  }
  const handleCounter = (e)=>{
    setPayload(Number(e.target.value))
}

  const handleSubmit = ()=>{
      if(!payload) {
        alert("please enter the amount")
        return
      }
    dispatch(incrementByAmount(payload))
}

const handleSubmitName = ()=>{
  if(!name) {
    alert("please enter the name")
    return
  }

dispatch(changeName(name))
}

const fakeApiCall =()=>{

  fetchData(dispatch)

}

useEffect(()=>{

  dispatch(fetchFakeApi())
  dispatch(fetchjsonApi())

},[])
  return (
    <div className="App">
     <p>Redux Toolkit</p>
     <span>{count}</span>
     <p>{Name}</p>
     <div>
       
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

      </div>

      <input type='number' onChange={handleCounter} placeholder='increment By Amount'></input>
      <button onClick={handleSubmit}> increment By Amount</button>
      <input type='text' id='payloadName' onChange={handleName} placeholder='Enter Name'></input>
      <button onClick={handleSubmitName}> change Name</button>
      <button onClick={fakeApiCall}>hii</button>
   
    </div>
  );
}

export default App;
