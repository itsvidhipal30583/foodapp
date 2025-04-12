import React, { useState } from 'react'
import {Box, TextField} from '@mui/material'

const Form = () => {

    const [task, settask] = useState("");
    const [dur, setdur] = useState("");
    const [status, setStatus] = useState("pending");
  const [show, setshow] = useState("");
  


  const handleClick = (e) => {
    e.prevent.Default();
    const alldata = { task, dur, status }
    setshow([...show, alldata]);
    settask("");
    setdur("");
    setStatus("pending")
  }
  return (
    <div>
      <Box sx={{boxShadow:10,maxWidth:500,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:5, flexDirection:'column',p:5,mt:15,mx:'auto'}}>
       
        <h4 style={{ color: 'navy', textDecoration: 'underline' }}>Task Management</h4>
        <div className='w-100 '>
          <h5>Task Name</h5>
          <input />
          <h5>Task Duration</h5>
          <input />
          <h5>Task Status</h5>
          <select>
            <option>completed</option>
            <option>In progress</option>
            <option>Pending</option>
          </select>

          <span><button className='btn btn-primary mx-3 p-1 fw-bold'onClick={handleClick} >Add Task</button></span>
        </div>
       
          

       

       

       
        
        <div>
          <h4 className='mt-5 ms-5 d-flex justify-content-center'> All Tasks</h4>
          <table className=' w-full mt-2 border text-sm'>
            <thead>
              <tbody>
                <tr className='bg-gray-100'>
                  <th className='px-2 py-1'>Name</th>
                  <th className='px-2 py-1'>Duration</th>
                  <th className='px-2 py-1'>Status</th>
                </tr>
                
              </tbody>
            </thead>
          </table>
        </div>
      
       
        
       
      </Box>
    </div>
  )
}

export default Form
