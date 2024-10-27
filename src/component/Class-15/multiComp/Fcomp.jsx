import React,{useContext} from 'react'
import { UserContext } from '../../../App';

const Fcomp = () => {
  let user = useContext(UserContext);

  return (
    <>
      <h1>{user}</h1>
    </>
  )
}

export default Fcomp
