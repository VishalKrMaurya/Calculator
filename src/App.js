import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [input,setInput]= useState('');


  const calculateResult = (input) => {
    
    let result;
    try{
      const operators = ['+','-','/','*','%'];
      let operator = null;

      for(let i=0;i<input.length;i++){
        if(operators.includes(input[i])){
          operator=input[i];
          break;
        }
      }

      if(!operator){
        if(isNaN(parseFloat(input).toString()))
          throw new Error('ERR');
        setInput(parseFloat(input).toString());
        return;
      }
      
      const [operand1, operand2] = input.split(operator).map(parseFloat);
      console.log(operand1,operand2);
      if(isNaN(operand1) || isNaN(operand2)) {
        console.log('NaN');
        setInput('Error');
        return;
      }

      switch(operator){
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          result = operand1 / operand2;
          break;
        case '%':
          result = operand1 % operand2;
          break;
        default:
          throw new Error('Invalid Operator');
      }

      setInput(result.toString());

    }
    catch(error){
      setInput('Error');
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

      calculateResult(input);
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
