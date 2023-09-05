import React, { useRef, useState } from 'react'

export function UseRefDocs4() {
    console.log('render');
    const [isPlaying, setIsPlaying] = useState(false)
    const ref = useRef(null)

    const handleClick = () => {
        const nextIsPlaying = !isPlaying
        setIsPlaying(nextIsPlaying)

        if (nextIsPlaying) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    }
    return (
        <>
            <h4>Video player</h4>
            <button onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <video
                width={'350'}
                ref={ref}
            >
                <source 
                    src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
                    type='video/mp4'
                />
            </video>
        </>
    )
}
