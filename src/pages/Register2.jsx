import React, { useState } from 'react'

const Register2 = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');


  const handleClick = (e) => {
    e.preventDefault();
  
  
  const userdetail = {
    name,
    email,
    password

  };
  localStorage.setItem('user', JSON.stringify(userdetail));
  alert("Successfully data stored")
};
  return (


    <div className='container'>
      <div className='form-container shadow-lg  h-50  text-center justify-content-center'>
        <h2 className=''>Registration from</h2>
     

        <div className='flex-col m-3 '>
          <input type="name" placeholder='Enter your name' value={name} onChange={(e)=>setname(e.target.value)} className='w-100 m-2 p-1 rounded-2' />
          <input type="email" placeholder='Enter your email'value={email} onChange={(e)=>setemail(e.target.value)} className='w-100 m-2 p-1 rounded-2' />
          <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setpassword(e.target.value)} className='w-100 m-2 p-1 rounded-2' />
         
         </div>
        <button className=' w-100 btn btn-primary mt-2'onClick={handleClick}>Submit</button>
      </div>
    </div>
  )
}

export default Register2
