import React, { useCallback, useEffect, useRef, useState } from 'react'

// useRef

export function Lesson2() {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
    // const ulRef = React.useRef()

    let ulRef = useRef()
    // useRef saves a link to DOM element by atribute ref
    // <ul ref={ulRef}>...</ul>
    // useRef can keep it link through renders 

    const addNumber = () => {
        const lastNumber = numbers[numbers.length - 1]
        setNumbers([...numbers, lastNumber + 1])
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

    return (
        <div >
            <h2>Lesson2</h2>
            <button onClick={addNumber}>add item</button>
            <button onClick={removeScroll}>remove scroll</button>
            <ul ref={ulRef} style={{ overflow: 'scroll', height: '200px' }} >
                {numbers.map((n) => {
                    return (
                        <li className='li-2' key={n}>{n}</li>
                    )
                })}
            </ul>
        </div>
    )
}
