import CreateDigits from "./Components/CreateDigits";
import {useState} from 'react'


function App() {
  const [calc, setCalc]  = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];


  const updateCal = value => {
    if( (ops.includes(value) && calc === '') || ( ops.includes(value) && ops.includes(calc.slice(-1)))){
      return
    }
    setCalc(calc + value);

    if(!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const deleteLast = () => {
    if( calc === '') {
      return
    }

    const value = calc.slice(0, -1);
    setCalc(value);
    setResult(value)
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {/* condition ? true : false */}
          { result ? <span>({result})</span> : ''} {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={()=> updateCal("/")}>/</button>
          <button onClick={()=> updateCal("*")}>*</button>
          <button onClick={()=> updateCal("+")}>+</button>
          <button onClick={()=> updateCal("-")}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          <CreateDigits updateCal={updateCal} /> 
          <button onClick={()=> updateCal("0")}>0</button>
          <button onClick={()=> updateCal(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
