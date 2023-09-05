import React, { useRef, useState } from 'react'

export function UseRefDocs() {
  
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const intervalRef = useRef(null)


  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
        setNow(Date.now())
    }, 10)
  }

  function handleStop() {
    clearInterval(intervalRef.current)
  }

  let secondsPassed = 0
  
  if(startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }

    return (
    <>  
        <input  />
        <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
        <button onClick={handleStart}>START</button>
        <button onClick={handleStop}>STOP</button>
    </>
  )
}
