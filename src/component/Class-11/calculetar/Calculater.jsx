import React, { useState } from 'react'
import './Calculetar.css'

const Calculater = () => {

    // const [number1, setNumber1] = useState('');
    // const [number2, setNumber2] = useState('');
    // const [resalt, setResalt] = useState('');

    // const InputFun1 = (Event) => {
    //     setNumber1(Number(Event.target.value))
    // }
    // const InputFun2 = (Event) => {
    //     setNumber2(Number(Event.target.value))
    // }
    // const Sum = () => {
    //     const sum = number1 + number2;
    //     setResalt(sum)
    // }
    // const Minus = () => {
    //     const minus = number1 - number2;
    //     setResalt(minus)
    // }
    // const Mullti = () => {
    //     const mullti = number1 * number2;
    //     setResalt(mullti)
    // }
    // const Division = () => {
    //     const division = number1 / number2;
    //     setResalt(division)
    // }
    // return (
    //     <>
    //         <p><input type="text" value={number1} onChange={InputFun1} /></p>
    //         <p><input type="text" value={number2} onChange={InputFun2} /></p>
    //         <h1>Resalt = {resalt}</h1>
    //         <p>
    //             <button className='btn' onClick={Sum}>+</button>
    //             <button className='btn' onClick={Minus}>-</button>
    //         </p>
    //         <p>
    //             <button className='btn' onClick={Mullti}>*</button>
    //             <button className='btn' onClick={Division}>/</button>
    //         </p>
    //     </>
    // )




    const [uValue, setValue] = useState({ number1: "", number2: "", resalt: "" });

    const InputFun1 = (Event) => {
        setValue(
            {
                ...uValue,
                number1: Number(Event.target.value)
            }
        );
    }
    const InputFun2 = (Event) => {
        setValue(
            {
                ...uValue,
                number2: Number(Event.target.value)
            }
        );
    }
    const Sum = () => {
        const sum = uValue.number1 + uValue.number2;
        setValue(
            {
                ...uValue,
                resalt: sum
            }
        );
    }
    const Minus = () => {
        const minus = uValue.number1 - uValue.number2;
        setValue(
            {
                ...uValue,
                resalt: minus
            }
        );
    }
    const Mullti = () => {
        const mullti = uValue.number1 * uValue.number2;
        setValue(
            {
                ...uValue,
                resalt: mullti
            }
        );
    }
    const Division = () => {
        const division = uValue.number1 / uValue.number2;
        setValue(
            {
                ...uValue,
                resalt: division
            }
        );
    }
    return (
        <>
            <p><input type="text" value={uValue.number1} onChange={InputFun1} /></p>
            <p><input type="text" value={uValue.number2} onChange={InputFun2} /></p>
            <h1>Resalt = {uValue.resalt}</h1>
            <p>
                <button className='btn' onClick={Sum}>+</button>
                <button className='btn' onClick={Minus}>-</button>
            </p>
            <p>
                <button className='btn' onClick={Mullti}>*</button>
                <button className='btn' onClick={Division}>/</button>
            </p>
        </>
    )
}

export default Calculater
