import React, { useState } from 'react';
import './App.css'

function App() {

  const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  const generateRandomColor = (e) => {
    const body = document.querySelector('body')
      body.style.background = getRandamColor()
    };

function getRandamColor(){
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += colorArr[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  }
    


  return (
   
      <div className='hero'>
        <h1>Random Background Color Changer</h1>
        <button onClick={generateRandomColor}>Click Me🔥</button>
      </div>
   
  );
}

export default App;