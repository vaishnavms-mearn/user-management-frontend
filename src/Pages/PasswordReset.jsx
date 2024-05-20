// This is the page for password reset form
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBNavbarBrand, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetPasswordAPI } from '../Services/allApi';
import { Button } from 'react-bootstrap';
import img from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
function PasswordReset() {
    const { token } = useParams();
    console.log(token);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    //Reset Password Function
    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match", {
                closeButton: <Button variant="outline-light">OK</Button>,
            });
            return;
        }

        const result = await resetPasswordAPI({ token, newPassword });

        if (result.status === 200) {
            toast.success("Password reset successful", {
                closeButton: <Button variant="outline-light">OK</Button>,
                onClose: () => navigate('/login'),
            });
        } else {
            toast.error(result.response.data, {
                closeButton: <Button variant="outline-light">OK</Button>,
            });
        }
    };

    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol className='auth-column bg-black px-5' sm='6'>
                    <div className='d-flex flex-row ps-5 pt-5'>
                        <MDBNavbarBrand href='/' style={{ color: '#e6e6ea' }} >
                            <img
                                src='https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
                                height='50'
                                alt=''
                                className='me-3'
                                loading='lazy'
                            />
                            <span className="h2 fw-bold mb-0 auth-heading">User Management System</span>
                        </MDBNavbarBrand>
                    </div>

                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-2'>
                        <h3 className='fw-normal my-4 ps-5 pb-1 py-5' style={{ letterSpacing: '3px', color: '#FBFEF9' }}>
                            Reset Password
                        </h3>
                        <form autoComplete="off">
                            <MDBInput
                                wrapperClass='mb-4 mx-5 w-100'
                                label='New Password'
                                labelClass='white-label-class'
                                id='formControlLg'
                                type='password'
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                size="lg"
                            />
                            <MDBInput
                                wrapperClass='mb-4 mx-5 w-100'
                                label='Confirm Password'
                                labelClass='white-label-class'
                                id='formControlLg'
                                type='password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                size="lg"
                            />
                            <button className="glow-on-hover mx-5 my-3" type="button" onClick={handleResetPassword}>Reset Password</button>
                        </form>
                    </div>
                </MDBCol>

                <MDBCol sm='6' className='d-none d-sm-block px-0'>
                        <MDBCarousel className='carousel' interval={3000}>
                            <MDBCarouselItem itemId={1}>
                                <div className="carousel-item-content" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))' }}>
                                    <img src={img} className='d-block w-100' alt='...' height={'840vh'} style={{ objectFit: 'cover' }} />
                                </div>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId={2}>
                                <img src={img2} className='d-block w-100' alt='...' height={'840vh'} style={{ objectFit: 'cover' }} />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId={3}>
                                <img src={img3} className='d-block w-100' alt='...' height={'840vh'} style={{ objectFit: 'cover' }} />
                            </MDBCarouselItem>
                        </MDBCarousel>
                    </MDBCol>
            </MDBRow>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </MDBContainer>
    );
}

export default PasswordReset;
