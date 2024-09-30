import React, { useState } from 'react'

function UsestateHook() {
    let num = 0;
    const [count, setCount] = useState(num);

    const p = () => setCount(count + 1)
    const m = () => setCount(count - 1)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={p}>+</button>
            <button onClick={m}>-</button>
        </>
    )
}

export default UsestateHook
