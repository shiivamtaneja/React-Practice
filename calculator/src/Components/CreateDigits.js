import React from 'react'

export default function CreateDigits({updateCal}) {
    
    const digits = [];

    for (let i = 1; i < 10; i++){
        digits.push(
            <button onClick={()=> updateCal(i.toString())} key={i}>{i}</button>
        )
    }
    return digits;
    
}
