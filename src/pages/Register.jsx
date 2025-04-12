import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, email, password }
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user));
        alert('User Registered Successfully...');
        navigate('/login');
    }

    return (
        <>
            <Navbar />
            <form>
         <Box sx={{ boxShadow: 10, maxWidth: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '260', p: 5, mt: 12, mx: 'auto', borderRadius: 5 }}>
        <Typography>
      <h2 style={{ textDecoration: 'underline', color: 'navy' }}>Register</h2>
      </Typography>
     <TextField label="Name" type='text' value={name} onChange={(e) => setName(e.target.value)} fullWidth margin='normal' variant='outlined' required />

      <TextField label="Email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} variant='outlined' fullWidth margin='normal' required />

      <TextField label="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} variant='outlined' fullWidth margin='normal' required />

 <Button variant='contained' fullWidth sx={{ p: 1.3, mt: 2 }} onClick={handleSubmit}>Submit</Button>
                </Box>
            </form>
        </>
    )
}

export default Register