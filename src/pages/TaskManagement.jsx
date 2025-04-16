
import React, { useState } from 'react'


const TaskManagement = () => {

    const getdata = JSON.parse(localStorage.getItem('task')) || [];

    const [task, settask] = useState(getdata);
    console.log(task)
    const [taskname, settaskname] = useState('');
    const [duration, setduration] = useState('');
    const [status, setstatus] = useState('');


    const handleclick = (e) => {
        e.preventDefault();
        if (!taskname || !duration || !status) {
           alert("All field Required");
            return;
        }

        const ourdata = { taskname, duration, status }
        const updateData = [...task, ourdata];
        settask(updateData);

        localStorage.setItem('task', JSON.stringify(updateData))
        alert("Data Added successfully ")

        
    }

    return (
        <div className='shadow-lg col-lg-8 mt-5 p-2 container fw-bold'>
            <div>
                <h3 className='text-decoration-underline text-center'>Task Management</h3>
            </div>
            <form>
                <label htmlFor='' className='fw-bold'>Task Name</label>
                <input type="text" className='form-control' value={taskname } onChange={(e)=>settaskname(e.target.value)} placeholder='Enter your TaskName' />

                <label htmlFor='' className='fw-bold mt-3'>Task Duration</label>
                <input typ="text" className='form-control' value={duration} onChange={(e)=>setduration(e.target.value)} placeholder='Enter your Duration' />

                <label htmlFor='' className='fw-bold mt-3'>Task Status</label>
                <select className='form-select' onChange={(e)=>setstatus(e.target.value)}>
                    <option value="" >Select Status</option>
                    <option value="progressing">Progressing</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </form>

            <div>
                <button className='btn btn-success mt-3 w-100 fw-bold' onClick={handleclick}>Submit</button>
            </div>

            <div>
                <table className='table mt-4'>
                    <thead>
                        <tr>
                            <th className='bg-dark text-white'>S.NO</th>
                            <th className='bg-dark text-white'>Task Name</th>
                            <th className='bg-dark text-white'>Task Status</th>
                            <th className='bg-dark text-white'>Task Duration</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            task.map((element, index) => (
                                <tr key={index}>
                                    <td>{ index+1}</td>
                                    <td>{element.taskname }</td>
                                    <td>{element.duration}</td>
                                    <td>{element.status }</td>
                                </tr>
                            )) 
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default TaskManagement
