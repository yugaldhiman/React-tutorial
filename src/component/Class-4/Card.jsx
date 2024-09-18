import React from 'react'
import './Card.css';
function Card() {

    const arrays = ["Name = Yugal Dhiman", "Center = Ducat India", "Course = Full Stack"];
    const list = arrays.map((array, keys) => <div className="childBox" key={keys}>
        <h2>{array}</h2>
    </div>)
    return (
        <>
            <div className='mainBox'>
                {list}
            </div>
        </>
    )
}
export default Card
