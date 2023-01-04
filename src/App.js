import React,{useState} from 'react'
import './App.css'
//functional component-->>
const App = () => {
  // states-->>
  const[result,setResult]=useState('')
  // function to handle click
  const clickHandler=(e)=>{
    setResult(result.concat(e.target.value))
  }
  // function to clear display
  const clearDisplay=()=>{
    setResult('')
  }
  // function to get the answer-->>
  const ans=()=>{
    setResult(eval(result).toString())
  }
  return (
    <div className='calculator'>
    {/* heading */}
      <h1>CALCULATOR</h1>
      {/* Buttons */}
      <input type='text' placeholder='0' value={result} className='input'/>
      <input type='button' value='9' onClick={clickHandler} className='btn'/>
      <input type='button' value='8' onClick={clickHandler} className='btn'/>
      <input type='button' value='7' onClick={clickHandler} className='btn'/>
      <input type='button' value='+' onClick={clickHandler} className='btn color'/>
      <input type='button' value='6' onClick={clickHandler} className='btn'/>
      <input type='button' value='5' onClick={clickHandler} className='btn'/>
      <input type='button' value='4' onClick={clickHandler} className='btn'/>
      <input type='button' value='-' onClick={clickHandler} className='btn color'/>
      <input type='button' value='3' onClick={clickHandler} className='btn'/>
      <input type='button' value='2' onClick={clickHandler} className='btn'/>
      <input type='button' value='1' onClick={clickHandler} className='btn'/>
      <input type='button' value='/' onClick={clickHandler} className='btn color'/>
      <input type='button' value='.' onClick={clickHandler} className='btn'/>
      <input type='button' value='0' onClick={clickHandler} className='btn'/>
      <input type='button' value='%' onClick={clickHandler} className='btn'/>
      <input type='button' value='*' onClick={clickHandler} className='btn color'/>
      <input type='button' value='=' onClick={ans} className='btn btn2'/>
      <input type='button' value='CLR' onClick={clearDisplay} className='btn btn1 color'/>
    </div>
  )
}

export default App
