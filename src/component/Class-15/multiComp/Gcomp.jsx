import React from 'react'
import { UserContext } from '../../../App';
import Hcomp from './Hcomp'

const Gcomp = () => {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => <h1>{user}</h1>
        }
      </UserContext.Consumer>
      <Hcomp />
    </div>
  )
}

export default Gcomp
