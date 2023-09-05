import React, { useRef } from 'react'

export function UseRefDocs2() {
    const inputRef = useRef(null)

    const handleInputFocus = () => {
        inputRef.current.focus()
    }
    const handleInputUnfocus = () => {
        inputRef.current.blur()
    }

    return (
        <>
            <h4>Handling input with useRef</h4>
            <input ref={inputRef} />
            <button onClick={handleInputFocus}>Focus</button>
            <button onClick={handleInputUnfocus}>Unfocus</button>
        </>
    )
}
