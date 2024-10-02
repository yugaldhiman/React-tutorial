import React, { useState } from 'react'

const MulltiInput = () => {
    const [uName, setUname] = useState({obj1:"",obj2:""})
    return (
        <>
            <input type="text"
                value={uName.obj1}
                placeholder='Enter Your Name'
                onChange={Event => setUname({ ...uName, obj1: Event.target.value })}
            />
            <input type="text"
                value={uName.obj2}
                placeholder='Enter Your Name'
                onChange={Event => setUname({ ...uName, obj2: Event.target.value })}
            />
            <h1>{uName.obj1} {uName.obj2}</h1>
        </>
    )
}

export default MulltiInput
