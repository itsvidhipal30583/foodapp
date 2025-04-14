import React, { useState } from 'react'

const TaskMnagement = () => {

    const [name, setname] = useState('');
    const [duration, setduration] = useState('');
    const [status, setstatus] = useState('');

  return (
      <div className='container bg-inherit-50'>
          <div className='form-container shadow-lg h-50  text-center justify-content-center'>
              <h3 className=''>Task Management</h3>
              
              <div className='flex-col m-3'>
                  <input type="text" placeholder='enter your taskname' className='w-100 m-2 p-1 rounded-2' />
                  <input type="duration" placeholder='enter duration' className='w-100 m-2 p-1 rounded-2' />
                  <input type="status" placeholder='enter status' className='w-100 m-2 p-1 rounded-2' />
              </div>
              
              <button className='btn btn-success w-100'>Add Task</button>
              <div>
                  <h4 className='mt-4'>Show Task</h4>
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
  )
}

export default TaskMnagement
