import React from 'react'
import Fcomp from './Fcomp'
import Gcomp from './Gcomp'

const Ecomp = (props) => {
    let data = props.data
    return (
        <>
        <h1>Ecomp</h1>
            <Fcomp data={data} />
            <Gcomp data={data}/>
        </>
    )
}

export default Ecomp
