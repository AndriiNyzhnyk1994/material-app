import React, { useRef } from 'react'

export function UseRefDocs3() {
    const listRef = useRef(null)

    const scrollToIndex = (index) => {
        const listNode = listRef.current

        const imgNode = listNode.querySelectorAll('li > img')[index]
        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        })
    }

    return (
        <div>
            <h4>Scrolling an image into view on click</h4>
            <nav>
                <button onClick={() => { scrollToIndex(0) }}>Tom</button>
                <button onClick={() => { scrollToIndex(1) }}>Mary</button>
                <button onClick={() => { scrollToIndex(2) }}>Jery</button>
            </nav>
            <div>
                <ul ref={listRef}>
                    <li>
                        <img src="https://placekitten.com/g/200/200" alt="Tom" />
                    </li>
                    <li>
                        <img src="https://placekitten.com/g/300/200" alt="Mary" />
                    </li>
                    <li>
                        <img src="https://placekitten.com/g/250/200" alt="Jery" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
