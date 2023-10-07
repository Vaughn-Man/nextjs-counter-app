'use client'
import React, {useState } from 'react';
export default function Home() {
  const [number, setNum] = useState(0);

  const increment = () => {
    setNum((prevNum) => prevNum + 1); 
  }
    
  const decrement = () => {
    setNum((prevNum) => prevNum - 1);
  }

  return (
    <div>
      <div className='textedit'>
      <span><h1>Click Counter</h1></span>
      <span>Times you've clicked: {number}</span>
      </div>
      <div className='bContainer'>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  )
}
