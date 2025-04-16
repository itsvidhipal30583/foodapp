import React, { useState } from 'react'

const TaskMnagement = () => {

    const [task, settask] = useState('');
    const [duration, setduration] = useState('');
    const [status, setstatus] = useState('Pending');
    const [show, setshow] = useState('');


    const handleClick = (e) => {
        e.prevent.Default();

         localStorage.setItem('user', JSON.stringify());
        alert("data stored successfully")
};

  return (
      <div className='container bg-inherit-50'>
          <div className='form-container shadow-lg h-50  text-center justify-content-center'>
              <h3 className=''>Task Management</h3>
              
              <div className='flex-col m-3'>
                  <input type="text" placeholder='enter your taskname' onChange={(e)=>settask(e.target.value)} className='w-100 m-2 p-1 rounded-2' />
                  <input type="duration" placeholder='enter duration' onChange={(e) => settask(e.target.value)} className='w-100 m-2 p-1 rounded-2' />
                  <input type="status" placeholder='enter status' onChange={(e) => settask(e.target.value)} className='w-100 m-2 p-1 rounded-2' />

                  <button className='btn btn-success w-100' onClick={handleClick}>Add Task</button>
                  <div>
                      <h4 className='mt-2'>Show Task</h4>
                      <table>
                          <thead>
                              <tr>
                                  <th className='border px-2 py-1'>Task</th>
                                  <th className='border px-2 py-1'>Duration</th>
                                  <th className='border px-2 py-1'>Status</th>
                              </tr>
                          </thead>

                      </table>
                  </div>
              </div>
              
            
            
          </div>
        </div>
  )
}

export default TaskMnagement
