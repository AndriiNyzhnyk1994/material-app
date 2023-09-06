import React, { useMemo } from 'react'

let renderCount = 0

export default React.memo(
    function IsFive({ value }) {
        console.warn(`isFive render: ${++renderCount}`);

        const getResult = useMemo(() => {
            let i = 0
            while (i < 9000000) i++
            return value === 5 ? 'It`s FIVE' : 'Not Five yet'
        }, [value])

        return (
            <h3>{getResult}</h3>
        )
    }, 
    (prevProps, nextProps) => {
        if(nextProps.value === 5) {
            return false
        }
        else {
            return true
        }
    }
)