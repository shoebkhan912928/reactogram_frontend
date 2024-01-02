import React from 'react'
import './signup.css'
import social_desktop from '../images/networks-5367342_1280.jpg'
import social_mobile from '../images/boliviainteligente-0Bg50WAUgC8-unsplash.jpg'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="container login-container">
            <div className="row">
                <div  className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                <img alt='social' className='social_desktop' src={social_desktop} style={{width:'100%', height:'100%'}} />
                <img alt='social' className='social_mobile' src={social_mobile}/>

                
                </div>
                <div className="col-md-5 col-sm-12 ">
                    <div className="card shadow" >
                        <div className="card-body px-5">
                            <h4 className="card-title text-center mt-3 fw-bold">Sign Up</h4>
                            <form>
                                <input type='text' className='form-control p-2 mt-4 mb-2 input-bg' placeholder='Phone ' />
                                <input type='email' className='form-control p-2  mb-2 input-bg' placeholder='Email ' />
                                <input type='text' className='form-control p-2  mb-2 input-bg' placeholder='Full Name ' />
                                <input type='password' className='form-control p-2 mb-2 input-bg' placeholder='Password' />
                                <div className='d-grid mt-3'>
                                    <button className='costom-btn-blue costom-btn'>Sign Up</button>
                                </div>
                                <div className='my-4'>
                                    <hr className='text-muted' />
                                    <h5 className='text-muted text-center'>OR</h5>
                                    <hr className='text-muted' />
                                </div>
                                <div className='mt-3 mb-5 d-grid'>
                                    <button className='costom-btn-white costom-btn'>
                                        <span className='text-muted fs-6'>Already have  an account?</span>
                                        <Link  to='/login' className='ms-1 text-info fw-bold'>Log In</Link>
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
  )
}

export default Signup;