import React from 'react'
import Hcomp from './Hcomp'

const Gcomp = (props) => {
    let data = props.data
  return (
    <>
    <h1>Gcomp</h1>
      <Hcomp data={data}/>
    </>
  )
}

export default Gcomp
