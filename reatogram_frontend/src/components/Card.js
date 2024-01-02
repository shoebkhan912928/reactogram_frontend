import React from 'react'
import './card.css'
const Card = () => {
    return (
        <div className='card shadow-sm'>
            <div className='card-body px-2'>
                <div className='row'>
                    <div className='col-6 d-flex'>
                        <img className=' profile-pic p-2' alt='profile pic' src='https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D' />
                        <div className='mt-2'>
                            <p className='fs-6 fw-bold'>Tittle</p>
                            <p className='location'>Description</p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <span className='float-end mt-1 p-2 fs-3'>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </span>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <img style={{ borderRadius: '15px' }} className='p-2 img-fluid' alt='post image' src='https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D' />

                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-6 d-flex'>
                        <i className="ps-2 fs-4 fa-regular fa-heart"></i>
                        <i className="ps-2 fs-4 fa-regular fa-comment"></i>
                        <i className="ps-2 fs-4 fa-solid fa-location-arrow"></i>

                    </div>

                    <div className='col-6'>
                        <span className='pe-2 fs-6 fw-bold float-end'>200 likes</span>

                    </div>

                </div>
                <div className='row'>
                    <div className='col-12 mt-2'>
                        <span className='p-2  text-muted'>2 Hours Ago</span>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Card