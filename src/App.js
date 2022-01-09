import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[firstNumber,setFirst]=useState([]);
  const[secondNumber,setSecond]=useState([]);
  const[numOne,setNumOne]=useState(0);
  const[numTwo,setNumTwo]=useState(0);
  const[option,setOption]=useState("");
  const[equal,setEqual]=useState(false);
  const[eraser,setEraser]=useState(false);
  const[result,setResult]=useState(0);
  const num =[0,1,2,3,4,5,6,7,8,9];
  const operate =["+","/","*","-"];

  const key = num.map((item,key)=> <div key={key} className="number" onClick={()=>option===""?getFirstNumber(item):getSecondNumber(item)}>{item}</div>)
  const operation = operate.map((item,key)=>
  <div key={key} className="operate" onClick={()=>setOption(item)}>{item}</div>
  )

  //Get first number added to calculator
  function getFirstNumber(num){
    setFirst([...firstNumber,num])
  }

  //get second number added to calculator
  function getSecondNumber(num){
    setSecond([...secondNumber,num])
  }

  //For convert array to number
  useEffect(()=>{  
    setNumOne(+firstNumber.join("") )
    setNumTwo(+secondNumber.join("") ) 
  },[firstNumber,secondNumber])


  //For calculate 
  useEffect(()=>{
    if(option==="+"){
      setResult(numOne+ numTwo)  
    }else if(option==="-"){
      setResult(numOne-numTwo)
    }else if(option==="*"){
      setResult(numOne*numTwo)
    }else{
      setResult(numOne/numTwo)
    }
  },[option,numOne,numTwo])

  //For clean number and go to next operation
  useEffect(()=>{
    if(eraser){
      setOption("");
      setFirst([]);
      setSecond([]);
      setNumTwo(0);
      setNumOne(0);
      setResult(0);
      setEraser(false);
      setEqual(false)
    }
  },[eraser])


  return (
    <div className="App">
      {!equal?(<div className="monitor">{firstNumber}{option}{secondNumber}</div>):
      (<div className="monitor">{result}</div>)
      }
      <div className="calculate-root">
       <div className="numbers">
        {key}
        <div className="eraser" onClick={()=>!eraser?setEraser(true):setEraser(false)}>C</div>
        </div>
       <div className="operation">
         {operation}
         <div className="operate" onClick={()=>!equal?setEqual(true):setEqual(false)}>=</div>
       </div>
      </div>
     
    </div>
  );
}

export default App;