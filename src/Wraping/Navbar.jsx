import React from 'react'
import { useContext } from 'react'
import {Auth} from './AuthContextApi'

const Navbar = () => {
    //import and usecontext
    const { isLoggedin ,login,logout}=useContext(Auth)
  return (
    <div>
          isLoggedin?
          (
          <>
              <button className='btn btn-primary m-5'>Logout</button>
          </>
          )
          :
          (
          <>
              <button className='btn btn-primary m-5'>Login</button>
          </>
          )
    </div>
  )
}

export default Navbar
