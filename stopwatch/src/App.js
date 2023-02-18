import './App.css';
import { DisplayComponents} from './Components/DisplayComponents';
import { BtnComponents } from './Components/BtnComponents';
import React, {useState, useEffect} from 'react';

function App() {

  const [time, setTime] = useState(0)
  
  
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setisPaused] = useState(true)

  useEffect (()=>{
    let interval = null
    if(isActive  && !isPaused )  {
      interval = setInterval(() => {
        setTime((time)=> time + 10)
      }, 10);
    }
    else {
      clearInterval(interval)
    } 
    return () => {
      clearInterval(interval)
    }
  },[isActive, isPaused])

  return (
    <div className='main-wrapper'>
       <div className='clock-holder'>
          <div className='stopwatch'>
            <DisplayComponents timeValue={time} />
            <BtnComponents setIsActiveValue = {setIsActive} setisPausedValue = {setisPaused} isPausedValue = {isPaused} setTimeValue = {setTime}/>
          </div>
        </div> 
    </div>
  );
}

export default App;
