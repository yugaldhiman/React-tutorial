import React, { useState } from 'react'
function UsestateHook() {
    let num = 0;
    const [count, setCount] = useState(num);

    const Like = () => setCount(superCount => superCount + 1);

    const fun = () => {
        for (let i = 1; i <= 5; i++) {
            setCount(superCount => superCount + 1);
        }
    };
    
    const Dislike = () => setCount(superCount => superCount - 1);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={Like}>+</button>
            <button onClick={fun}>Super Like</button>
            <button onClick={Dislike}>-</button>
        </>
    )
}

export default UsestateHook
