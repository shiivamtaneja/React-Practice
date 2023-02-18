import React from 'react'


export function BtnComponents({setIsActiveValue, setisPausedValue, setTimeValue, isPausedValue}) {
  function onStart() {
    setIsActiveValue(true)
    setisPausedValue(false)
  }
  
  function onPause() {
    setisPausedValue(!isPausedValue)
  }
  
  function onReset() {
    setIsActiveValue(false)
    setTimeValue(0)
  }
  return (
    <div>
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Play/Pause</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
};
