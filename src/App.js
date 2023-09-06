import React, { useState } from 'react'
import './App.css';
import {Lesson1} from './Lesson-1/Lesson1';
import { Lesson2 } from './Lesson-2/Lesson2';
import { Lesson3 } from './Lesson-3/Lesson3';


function App() {
  
  return (
    <div className="App">
      {/* <Lesson1/> */}
      {/* <Lesson2/> */}
      <Lesson3/>
    </div>
  )
}

export default App;