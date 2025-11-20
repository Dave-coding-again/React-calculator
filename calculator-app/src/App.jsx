import React, { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  function handleNumberClick(number) {
    setCurrentNumber(currentNumber === "0" ? number : currentNumber + number);
  }
  function handleoperationClick(op) {
    setOperation(op);
    setPreviousNumber(currentNumber);
    setCurrentNumber("0");
  }
  function handleEqualClick() {
    if (operation && previousNumber !== null) {
      let result;
      const prev = parseFloat(previousNumber);
      const current = parseFloat(currentNumber);

      switch (operation) {
        case "+":
          result = prev + current;
          break;
        case "−":
          result = prev - current;
          break;
        case "×":
          result = prev * current;
          break;
        case "÷":
          result = prev / current;
          break;
        default:
          return;
      }
      setCurrentNumber(result.toString());
      setPreviousNumber(null);
      setOperation(null);
    }else{
      setCurrentNumber('Error');
      setPreviousNumber(null);
      setOperation(null);

    }
  }


  function handleClearClick() {
    setCurrentNumber("0");
    setPreviousNumber(null);
    setOperation(null);
  }
  function handleDecimalClick(){
    setCurrentNumber(currentNumber.includes('.') ? currentNumber : currentNumber + '.');
    
  }
  return (
    <div className="container-calculator">
      <div className="display">{currentNumber}</div>
      <div className="buttons">
        <button onClick={handleClearClick}>C</button>
        <button>±</button>
        <button>%</button>
        <button onClick={() => handleoperationClick("/")}>÷</button>
        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button onClick={() => handleoperationClick("*")}>×</button>
        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
        <button onClick={() => handleoperationClick("-")}>−</button>
        <button onClick={() => handleNumberClick("1")}>1</button>
        <button onClick={() => handleNumberClick("2")}>2</button>
        <button onClick={() => handleNumberClick("3")}>3</button>
        <button onClick={() => handleoperationClick("+")}>+</button>
        <button onClick={() => handleNumberClick("0")}>0</button>
        <button onClick={handleDecimalClick}>.</button>
        <button className="self"  onClick={handleEqualClick}>=</button>
      </div>
    </div>
  );

}

export default App;
