import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

let adjustInterval = undefined;


function App()
{
 
  const[watch,setWatch]=useState(0)
  const [started,setStarted]=useState(false)

  const startWatch=()=>{
    adjustInterval=setInterval(()=>{
      //setWatch(watch+1)
      setWatch((x)=>x+1)
      setStarted(true)
    },1000)
  }

  const stoptWatch=()=>{
      clearInterval(adjustInterval)
      setStarted(false)
  }

  const resetWatch=()=>{
      setWatch(0)
      clearInterval(adjustInterval)
      setStarted(false)
  }


  return(
    <div>
      <h1>Start Stop Watch</h1>
      <h1>{watch}</h1>
      <button disabled={started} onClick={startWatch}>Start</button>
      <button onClick={stoptWatch}>Stop</button>
      <button onClick={resetWatch}>Reset</button>

    </div>
  )
}

export default App;