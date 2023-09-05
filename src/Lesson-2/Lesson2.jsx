import React, { useCallback, useEffect, useRef, useState } from 'react'
import { UseRefDocs } from './UseRefDocs'
import { UseRefDocs3 } from './UseRefDocs3'
import { UseRefDocs4 } from './UseRefDocs4'

// useRef

export function Lesson2() {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])

   
    // ------------------- PART 1 ---------------

    let ulRef = useRef()
    // useRef saves a link to DOM element by atribute ref
    // <ul ref={ulRef}>...</ul>
    // useRef can keep it link through renders 

    const addNumber = () => {
        setNumbers( prev => [...prev, prev[prev.length - 1] + 1])
    }

    const handleScroll = useCallback(() => {
        console.log('scrolled')
    }, [])

    const removeScroll = () => {
        console.log(ulRef)
        ulRef.current.removeEventListener('scroll', handleScroll)
    }
    useEffect(() => {
        ulRef.current.addEventListener('scroll', handleScroll)
    }, [])

    // ------------------- PART 2 ---------------
    
    const timerRef = useRef()
    const start = () => {
        timerRef.current = setInterval(addNumber, 1000)
    }
    const stop = () => {
        console.log(timerRef.current);
        clearInterval(timerRef.current)
    }
    
    return (
        <div >
            <h2>Lesson2</h2>
            <h3>Part 1</h3>
            <button onClick={addNumber}>add item</button>
            <button onClick={removeScroll}>remove scroll</button>
            <ul ref={ulRef} style={{ overflow: 'scroll', height: '200px' }} >
                {numbers.map((n) => {
                    return (
                        <li className='li-2' key={n}>{n}</li>
                    )
                })}
            </ul>
            <h3>Part 2</h3>
            <button onClick={start}>START</button>
            <button onClick={stop}>STOP</button>
            <h3>Part 3</h3>
            {/* <UseRefDocs/> */} 
            {/* <UseRefDocs2/> */}
            {/* <UseRefDocs3/> */}
            <UseRefDocs4/>
        </div>
    )
}
