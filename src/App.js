import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [input,setInput]= useState('');


  // const calculateResult = (input) => {
    
  //   let result;
  //   try{
  //     const operators = ['+','-','/','*','%'];
  //     let operator = null;

  //     for(let i=0;i<input.length;i++){
  //       if(operators.includes(input[i])){
  //         operator=input[i];
  //         break;
  //       }
  //     }

  //     if(!operator){
  //       if(isNaN(parseFloat(input).toString()))
  //         throw new Error('ERR');
  //       // setInput(parseFloat(input).toString());
  //       // return;
  //       console.log(input, typeof input);
  //       return parseFloat(input);
  //     }
      
  //     // const [operand1, operand2] = input.split(operator).map(parseFloat);
  //     // console.log(operand1,operand2);
  //     // if(isNaN(operand1) || isNaN(operand2)) {
  //     //   console.log('NaN');
  //     //   setInput('Error');
  //     //   return;
  //     // }

  //     const [operand1, operand2] = input.split(operator);
  //     console.log(operand1,operand2);
      
  //     const op1 = calculateResult(operand1);
  //     const op2 = calculateResult(operand2);

  //     if(isNaN(op1) || isNaN(op2)){
  //       throw new Error('error');
  //     }


  //     switch(operator){
  //       case '+':
  //         result = op1 + op2;
  //         break;
  //       case '-':
  //         result = op1 - op2;
  //         break;
  //       case '*':
  //         result = op1 * op2;
  //         break;
  //       case '/':
  //         result = op1 / op2;
  //         break;
  //       case '%':
  //         result = op1 % op2;
  //         break;
  //       default:
  //         throw new Error('Invalid Operator');
  //     }

  //     console.log(result);

  //     return result;

  //   }
  //   catch(error){
  //     setInput('Error');
  //   }
  // }

  const calculateResult = (input) => {
    try {
      // Only allow digits, spaces, and valid operators to prevent code injection
      if (!/^[\d+\-*/%.()\s]+$/.test(input)) {
        throw new Error("Invalid characters in input");
      }

      // Use Function constructor to evaluate the math expression
      const result = Function(`"use strict"; return (${input})`)();

      if (typeof result !== "number" || isNaN(result)) {
        throw new Error("Invalid calculation");
      }

      return result;
    } 
    catch (error) {
      console.error(error.message);
      return "Error";
    }
  }


  const handleButton = (value) =>{
    if(value==='Ac'){
      setInput('');
    }
    else if(value==='Del'){
      setInput(input.slice(0,-1));
    }
    else if(value === '='){
      // try{
      //   setInput(eval(input).toString());
      // }
      // catch(error){
      //   setInput("Error");
      // }

      setInput(calculateResult(input).toString());
    }
    else{
      setInput((prev_value)=> prev_value + value);
    }
  }
  return (
    <div className='calculator'>
      
      <div class='cal'>
       <h1 id='input'> {input}</h1>
      <div className='input-section'>
        {/* <Box/> */}
        <div>
          <button onClick={()=> handleButton('Ac')}>AC</button>
          <button onClick={()=> handleButton('Del')}>Del</button>
          <button onClick={()=> handleButton('%')}>%</button>
          <button onClick={()=> handleButton('/')}>/</button>
        </div>
        <div>
          <button onClick={()=> handleButton('7')}>7</button>
          <button onClick={()=> handleButton('8')}>8</button>
          <button onClick={()=> handleButton('9')}>9</button>
          <button onClick={()=> handleButton('*')}>*</button>
        </div>
        <div>
          <button onClick={()=> handleButton('4')}>4</button>
          <button onClick={()=> handleButton('5')}>5</button>
          <button onClick={()=> handleButton('6')}>6</button>
          <button onClick={()=> handleButton('-')}>-</button>
        </div>
        <div>
          <button onClick={()=> handleButton('1')}>1</button>
          <button onClick={()=> handleButton('2')}>2</button>
          <button onClick={()=> handleButton('3')}>3</button>
          <button onClick={()=> handleButton('+')}>+</button>
        </div>
        <div>
          <button onClick={()=> handleButton('0')}>0</button>
          <button onClick={()=> handleButton('00')}>00</button>
          <button onClick={()=> handleButton('.')}>.</button>
          <button onClick={()=> handleButton('=')}>=</button>
        </div>
        

      </div>
      </div>
    </div>
  )
}

export default App
