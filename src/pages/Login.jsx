import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import js from '@eslint/js';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            alert('User LoggegIn Successfully..');
            navigate('/')
        }
        else {
            alert('Invalid Credentials..')
        }
    }
    return (
        <>
            <Navbar />
            <form>
                <Box sx={{ boxShadow: 10, maxWidth: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '300', p: 5, mt: 12, mx: 'auto', borderRadius: 5 }}>
     <Typography>
      <h2 style={{ textDecoration: 'underline', color: 'navy' }}>Login</h2>
     </Typography>

    <TextField label="Email" type='email' variant='outlined' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin='normal' ></TextField>

        <TextField label="Password" type='password' variant='outlined' value={password} onChange={(e) => setPassword(e.target.value)} fullWidth margin='normal' ></TextField>

      <Button variant='contained' fullWidth sx={{ p: 1.3, mt: 2 }} onClick={handleLogin}>Submit</Button>

                </Box>
            </form>
        </>
    )
}

export default Login