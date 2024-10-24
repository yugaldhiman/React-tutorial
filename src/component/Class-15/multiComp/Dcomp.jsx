import React from 'react'
import Ecomp from './Ecomp';

const Dcomp = (props) => {
    let data = props.data;
  return (
    <>
      <h1>Dcomp</h1>
      <Ecomp data={data}/>
    </>
  )
}

export default Dcomp
