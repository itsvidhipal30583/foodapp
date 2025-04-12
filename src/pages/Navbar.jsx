import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Navabr = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-warning'>
                <div className='container-fluid'>
                    <a href="" className='navbar-brand fs-3 fw-bold'>Vidhi</a>
                    <button className='navbar-toggler bg-white text-secondary' data-bs-toggle="collapse"
                        data-bs-target="#navbar">
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbar'>
                        <ul className='navbar-nav mx-auto'>
                            <li className='fw-bold fs-5'>
                                <Link to={'/'} className='nav-link'>Home</Link>
                            </li>

                            <li className='fw-bold fs-5'>
                                <Link to={'/about'} className='nav-link'>About</Link>
                            </li>

                            <li className='fw-bold fs-5'>
                                <Link to={'/contact'} className='nav-link'>Contact</Link>
                            </li>


                            <li className='fw-bold fs-5'>
                                <Link to={'/cart'} className='nav-link'>
                                    <span className='bi bi-cart4 fw-bold fs-5'> </span>Cart</Link>
                            </li>
                        </ul>

                        <div className='d-flex gap-3'>
                            <Button variant='contained' style={{ padding: '8px' }}>
                                <Link to={'/login'} className='nav-link'>Login</Link>
                            </Button>

                            <Button variant='contained' style={{ padding: '8px' }}>
                                <Link to={'/login'} className='nav-link'>Register</Link>
                            </Button>


                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navabr
