import React, { useRef, useState } from 'react'

export function UseRefDocs4() {

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
                {isPlaying ? 'Play' : 'Pause'}
            </button>
            <video
                width={'350'}
                ref={ref}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source 
                    src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
                    type='video/mp4'
                />
            </video>
        </>
    )
}
