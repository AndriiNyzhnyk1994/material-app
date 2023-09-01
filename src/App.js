import React, { useState } from 'react'
import './App.css';


function App() {

  const [numbers, setNumbers] = useState([1, 2, 4])

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10)
    const newArr = [...numbers, randNumber]
    setNumbers(newArr)
  }

  return (
    <div className="App">
      <button onClick={addNumber}>ADD</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
