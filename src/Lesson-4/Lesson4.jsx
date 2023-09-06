import React, { useCallback, useRef, useState } from 'react'

export function Lesson4() {

    const [numbers, setNumbers] = useState([1, 2, 3, 4])
    const ulRef = useRef()
    const numbersRef = useRef()

    numbersRef.current = numbers

    const addNumber = () => {
        setNumbers(prev => [...prev, prev[prev.length - 1] + 1])
    }

    const handleScroll = useCallback(() => {
        console.log('Scroll', numbersRef.current);
    }, [numbersRef])

    const start = () => {
        ulRef.current.addEventListener('scroll', handleScroll)
    }

    const stop = () => {
        ulRef.current.removeEventListener('scroll', handleScroll)
    }


    // -----------------------  Example 2 -------------------------

    const [count, setCount] = useState(0)

    const onPlus = useCallback(() => setCount(count => count + 1), [])
    const onMinus = useCallback(() => setCount(count => count - 1), [])




    return (
        <div>
            <h2>useCallback</h2>
            <h4>Part 1</h4>
            <button onClick={addNumber}>add item</button>
            <ul ref={ulRef} style={{ overflow: 'scroll', height: '200px' }} >
                {numbers.map((n) => {
                    return (
                        <li className='li-2' key={n}>{n}</li>
                    )
                })}
            </ul>
            <button onClick={start}>START</button>
            <button onClick={stop}>STOP</button>

            <h4>Part 1</h4>
            <h1>{count}</h1>
            <Buttons onPlus={onPlus} onMinus={onMinus} />
        </div>
    )
}


const Buttons = React.memo(
    ({ onPlus, onMinus }) => {
        console.log('buttons render')

        return (
            <>
                <button onClick={onPlus}>+</button>
                <button onClick={onMinus}>-</button>
            </>
        )

    })










