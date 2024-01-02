import React from 'react'
import './NavBar.css'
import logo from '../images/eyestetix-studio-Xv1L5geXv8k-unsplash.jpg';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light shadow-sm">
            <div className="container-fluid">
                <NavLink className="navbar-brand ms-5" to='/'>
                    <img className='navlogo' alt='logos' src={logo} />
                </NavLink>
                <form className="d-flex me-md-5 ">
                    <input className=" searchbox form-control navbarbox me-2 text-muted" type="search" placeholder="Search" />
                    <a className='nav-link text-dark fs-5 searchIcon' href='#'><i className="fa-solid fa-magnifying-glass"></i> </a>

                    <a className='nav-link text-dark fs-5' href='#'><i className="fa-solid fa-house"></i> </a>
                    <a className='nav-link text-dark fs-5' href='#'><i className="fa-regular fa-heart"></i></a>
                    <div className="dropdown ">
                        <a className="btn " href="#" role="button" data-bs-toggle="dropdown" >
                            <img className='navbar_profile-pic ' alt='profile pic' src='https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D' />
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li>
                                <NavLink className='dropdown-item mt-0' to='/myprofile'> My Profile</NavLink>

                            </li>
                            <li><a className="dropdown-item" href="#">

                                Logout
                            </a></li>

                        </ul>
                    </div>



                </form>
            </div>
        </nav>
    )
}

export default NavBar;