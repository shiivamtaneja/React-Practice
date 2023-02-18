import React from 'react'


export function DisplayComponents({timeValue}) {
  
  return (
    <div>
      <span>{("0" + Math.floor(((timeValue / 360000)%60))).slice(-2)}</span>
      <span>:</span>
      <span>{("0" + Math.floor(((timeValue / 60000)%60))).slice(-2)}</span>
      <span>:</span>
      <span>{("0" + Math.floor(((timeValue / 1000)%60))).slice(-2)}</span>
      <span>:</span>
      <span>{("0" + ((timeValue / 10)%100)).slice(-2)}</span>
    </div>
  )
};



