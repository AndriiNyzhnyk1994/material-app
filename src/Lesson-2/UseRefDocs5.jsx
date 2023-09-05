import React, { forwardRef, useRef, useState } from 'react'

const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />
})


export function UseRefDocs5() {
    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.focus()
    }


    return (
        <>
            <MyInput ref={inputRef}/>
            <button onClick={handleClick}>Focus the input</button>
        </>
    )
}
