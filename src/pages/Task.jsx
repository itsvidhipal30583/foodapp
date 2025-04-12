import { Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Task = () => {
    const [task, setTask] = useState("");
    const [duration, setdur] = useState("");
    const [status, setStatus] = useState("pending");
    const [show, setshow] = useState([]);


    useEffect(() => {
        localStorage.setItem("show", JSON.stringify(show));
    }, [show]);


    useEffect(() => {
        const storeTasks = JSON.parse(localStorage.getItem("show")) || [];
        setshow(storeTasks);
    }, []);




    const handleClick = (e) => {
        e.preventDefault();
        const newTask = { task, duration, status };

        setshow([...show, newTask]);
        setTask("");
        setdur("");
        setStatus("Pending");
    };
    return (
        <div >

            <Box sx={{ boxShadow: 10, maxWidth: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', mx: 'auto', flexDirection: 'coulmn', p: 4, mt: 11, borderRadius: 5 }}>

                <form>
                    <h2 style={{ color: 'navy', textDecoration: 'underline', marginLeft: "280px" }}>Perform Task</h2>
                    <div >
                        <h4>Task Name</h4>
                        <TextField margin='normal' variant='outlined'

                            onChange={(e) => setTask(e.target.value)}
                            required />

                        <h4>Task Duration</h4>
                        <TextField margin='normal' variant='outlined'

                            onChange={(e) => setdur(e.target.value)}
                            required
                        />

                        <h4>Task Status</h4>
                        <select

                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full border p-2 rounded"
                        >
                            <option value="Pending">Pending</option>
                            <option value="InProgress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <button className='btn btn-primary m-5' onClick={handleClick}>Add Task</button>
                    </div>


                </form>


                <div>  <h2 className="text-xl font-semibold mt-6">Our Tasks</h2></div>

                <table className="w-full mt-2 border text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-2 py-1">Task</th>
                            <th className="border px-2 py-1">Duration</th>
                            <th className="border px-2 py-1">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {show.map((element, index) => (
                            <tr key={index}>
                                <td className="border px-2 py-1">{element.task}</td>
                                <td className="border px-2 py-1">{element.duration}</td>
                                <td className="border px-2 py-1">{element.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box>
        </div>
    )
}

export default Task
