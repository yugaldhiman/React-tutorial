import React, { useState } from 'react';

const ChangeColor = () => {

    const [Colors, setColor] = useState('red');
    const [large, setlarge] = useState('2rem');

    return (
        <>
            <h1 style={{ color: Colors ,  fontSize: large}}>hello india</h1>
            <button onClick={() => setColor('red')}>red</button>
            <button onClick={() => setColor('black')}>black</button>
            <button onClick={() => setColor('gray')}>gray</button>


            <button onClick={() => setlarge('2rem')}>2rem</button>
            <button onClick={() => setlarge('3rem')}>3rem</button>
            <button onClick={() => setlarge('4rem')}>4rem</button>
        </>
    )
}

export default ChangeColor
