import React from 'react'
import Ccomp from './Ccomp'
import Dcomp from './Dcomp'

const Acomp = (props) => {
    let data = props.data
    return (
        <>
        <h1>Acomp</h1>
            <Ccomp data={data} />
            <Dcomp data={data} />
        </>
    )
}

export default Acomp
