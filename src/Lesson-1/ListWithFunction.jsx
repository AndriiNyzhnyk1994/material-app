import React, { useEffect, useState } from "react";


export const ListWithFunction = () => {
    const initialState = [1, 2, 4]
    const [numbers, setNumbers] = useState(initialState)
    const [count, setCount] = useState(0)

    const addNumber = () => {
        const randNumber = Math.round(Math.random() * 10)
        const newArr = [...numbers, randNumber]
        setNumbers(newArr)
    }

    useEffect(() => {
        console.log('component did mount')
        return () => {
            console.log('component will inmount');
        }
    }, [])

    useEffect(() => {
        if (numbers !== initialState) {
            console.log('component did update')
        }
    }, [numbers])
    // by default useEffect runs after first render in any case (like componentDidMount)
    // even if we have something in the dependency array 
    // it's lifehack with "if" condition, that helps us to avoid unnecessary call
    // after first render.
    // from now it works just like componentDidUpdate
    

    useEffect(() => {
        if(count !== 0) {
            console.log('Count is called')
        }
    }, [count])
    // now we call useEffect for numbers and count separately

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => {setCount(count => count + 1)}}>+</button>
            <button onClick={addNumber}>ADD</button>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    )
}