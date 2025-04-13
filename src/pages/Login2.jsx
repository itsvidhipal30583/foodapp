import React, { useState } from 'react'


const Login2 = () => {
    const [islogin, setislogin] = useState(true);
  return (
    <div  className='container'>
          <div className='form-container'>
              <div className='form-toggle'>
                  <button className={islogin ?'active': ""} onClick={()=>setislogin(true)}>Login</button>
                  <button className={!islogin ?'active': ""} onClick={() => setislogin(false)}>Sign Up</button>
              </div>

              {
                  islogin ?
                      <>
                          <div className='form'>
                              <h2>Login Form</h2>
                              <input type="email" placeholder='Enter your email' />
                              <input type="password" placeholder='Enter your password' />
                              <a href="#">Forgot Password?</a>
                              <button>Login</button>
                              <p>Not a Member?<a href="#" onClick={()=>setislogin(false)}> SignUp Now</a></p>
                              
                          </div>
                      </>
                      :
                      <>
                          <div className='form'>
                              <h2>Signup Form</h2>
                             
                              <input type="email" placeholder='Enter your email' />
                              <input type="password" placeholder='Enter your password' />
                              <input type="pass" placeholder='Confirm password' />
                              <button>SignUp</button>
                          </div>
                      </>}
      </div>
    </div>
  )
}

export default Login2
