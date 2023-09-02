import React, {useState} from "react";


export const ListWithFunction = () => {
  const [numbers, setNumbers] = useState([1, 2, 4])

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10)
    const newArr = [...numbers, randNumber]
    setNumbers(newArr)
  }

    return (
        <div>
            <button onClick={addNumber}>ADD</button>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>

        </div>
    )
}