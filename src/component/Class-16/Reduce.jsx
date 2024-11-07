import React from 'react'

const Reduce = () => {
    const array = [0, 1, 2, 3, 4, 5];
    const sumValue = array.reduce(
        (fristValue, secondValue) => fristValue + secondValue
    )
    console.log(sumValue);
    return (
        <></>
    )
}

export default Reduce
