import React, { useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import img from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { confirmMailApi, loginAPI, registerAPI } from '../Services/allApi';
import { validate } from '../Components/js/validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import Animation from '../Components/Animation';

function Auth({ register }) {
    Animation()
    const isRegisterForm = register ? true : false;
    const [forgotPassword, setForgotPassword] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        company: "",
        password: "",
        confirmPassword: ""
    });
    const [otpEmail, setOtpEmail] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleValidation = () => {
        let formType = forgotPassword ? 'forgotPassword' : isRegisterForm ? 'register' : 'login';
        let data = forgotPassword ? { otpEmail } : userData;
        const errors = validate(formType, data);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
//register Data function
    const registerData = async () => {
        if (!handleValidation()) {
            return;
        }
        const result = await registerAPI(userData);
        if (result.status === 200) {
            toast.success("Registeration successful", {
                closeButton: <Button variant="outline-light">OK</Button>,
                onClose: () => {
                    navigate('/')
                }
            })
        } else {
            toast.error(result.response.data, {
                closeButton: <Button variant="outline-light">OK</Button>,
            });
        }
    };
//Login Data function
    const loginData = async () => {
        if (!handleValidation()) {
            return;
        }
        else {
            const result = await loginAPI(userData);
            console.log(result);
            if (result.status === 200) {
                const user = result.data.user;
                sessionStorage.setItem("existingUser", JSON.stringify(user));
                sessionStorage.setItem("token", result.data.token);
                toast.success("Login successful", {
                    closeButton: <Button variant="outline-light">OK</Button>,
                    onClose: () => {
                        navigate('/user')
                    }
                })
            } else {
                toast.error(result.response.data, {
                    closeButton: <Button variant="outline-light">OK</Button>,
                });
            }
        }
    };

//Send Mail Function
    const handleSendOtp = async () => {
        if (!handleValidation()) {
            return;
        }
        console.log(otpEmail);
        const reqBody = {
            "email": `${otpEmail}`
        }
        const result = await confirmMailApi(reqBody);
        if (result.status === 200) {
            toast.success("Otp Sent Successfully", {
                closeButton: <Button variant="outline-light">OK</Button>,
            })
        } else {
            toast.error(result.response.data, {
                closeButton: <Button variant="outline-light">OK</Button>,
            });
        }
    };

    return (
        <div>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol className='auth-column bg-black px-5' sm='6'>
                        <div className='d-flex flex-row ps-5 pt-5'>
                            <MDBNavbarBrand  style={{ color: '#e6e6ea' }} >
                                <img
                                    src='https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
                                    height='50'
                                    alt=''
                                    className='me-3'
                                    loading='lazy'
                                />
                                <span className="h2 fw-bold mb-0 auth-heading">User Verse</span>
                            </MDBNavbarBrand>
                        </div>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-2'>
                            <h3 className={`fw-normal my-4 ps-5 pb-1 ${!isRegisterForm ? 'py-5' : ''}`} style={{ letterSpacing: '3px', color: '#FBFEF9' }}>
                                {forgotPassword ? 'Forgot Password' : isRegisterForm ? 'Register Here' : 'Login Here'}
                            </h3>
                            {forgotPassword ? (
                                <form action="" autoComplete="off">
                                    {errors.otpEmail && <p className='validation'>{errors.otpEmail}</p>}
                                    <MDBInput
                                        wrapperClass='mb-4 mx-5 w-100'
                                        autoComplete="off"
                                        labelClass='white-label-class'
                                        label='Email address'
                                        id='formControlLg'
                                        type='email'
                                        value={otpEmail}
                                        onChange={(e) => setOtpEmail(e.target.value)}
                                        size="lg"
                                    />
                                    <button className="glow-on-hover mx-5 my-3" type="button" onClick={handleSendOtp}>Send OTP</button>
                                    <p className='ms-5'>
                                        <button onClick={() => setForgotPassword(false)} className='btn btn-primary my-3'>Back to Login</button>
                                    </p>
                                </form>
                            ) : (
                                <form action="" autoComplete="off">
                                    {isRegisterForm && (
                                        <div>
                                            {errors.name && <p className='validation'>{errors.name}</p>}
                                            <MDBInput
                                                wrapperClass='mb-4 mx-5 w-100'
                                                autoComplete="off"
                                                labelClass='white-label-class'
                                                label='Name'
                                                id='formControlLg'
                                                type='text'
                                                value={userData.name}
                                                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                                size="lg"
                                            />
                                            {errors.company && <p className='validation'>{errors.company}</p>}
                                            <MDBInput
                                                wrapperClass='mb-4 mx-5 w-100'
                                                label='Company'
                                                labelClass='white-label-class'
                                                id='formControlLg'
                                                type='text'
                                                value={userData.company}
                                                onChange={(e) => setUserData({ ...userData, company: e.target.value })}
                                                size="lg"
                                            />
                                        </div>
                                    )}
                                    {errors.email && <p className='validation'>{errors.email}</p>}
                                    <MDBInput
                                        wrapperClass='mb-4 mx-5 w-100'
                                        label='Email address'
                                        labelClass='white-label-class'
                                        id='formControlLg'
                                        type='email'
                                        value={userData.email}
                                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                        size="lg"
                                    />
                                    {errors.password && <p className='validation'>{errors.password}</p>}
                                    <MDBInput
                                        wrapperClass='mb-4 mx-5 w-100'
                                        label='Password'
                                        labelClass='white-label-class'
                                        id='formControlLg'
                                        type='password'
                                        value={userData.password}
                                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                        size="lg"
                                    />
                                    {isRegisterForm && errors.confirmPassword && <p className='validation'>{errors.confirmPassword}</p>}
                                    {isRegisterForm && (
                                        <MDBInput
                                            wrapperClass='mb-4 mx-5 w-100'
                                            label='Confirm Password'
                                            id='formControlLg'
                                            labelClass='white-label-class'
                                            type='password'
                                            value={userData.confirmPassword}
                                            onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
                                            size="lg"
                                        />
                                    )}

                                    <div>
                                        {isRegisterForm ? (
                                            <div>
                                                <button className="glow-on-hover mx-5 my-3" type="button" onClick={registerData}>Register</button>
                                                <p className='ms-5'>Have an account?
                                                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                                                        <a className="link-info mx-2">Login here</a>
                                                    </Link>
                                                </p>
                                            </div>
                                        ) : (
                                            <div>
                                                <button className="glow-on-hover mx-5 my-3" type="button" onClick={loginData}>Login</button>
                                                <p className="small pb-lg-3 ms-5">
                                                    <a className="text-muted text-white" href="#!" onClick={() => setForgotPassword(true)}>Forgot password?</a>
                                                </p>
                                                <Link to={'/register'} style={{ textDecoration: 'none' }}>
                                                    <p className='ms-5'>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </form>
                            )}
                        </div>
                    </MDBCol>

                    <MDBCol sm='6' className='d-none d-sm-block px-0' >
                        <MDBCarousel className='carousel' >
                            <MDBCarouselItem itemId={1} interval={3000}>
                                <div className="carousel-item-content" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0.9, 0.9))' }}>
                                    <img src={img3} className='d-block w-100' alt='...' height={'840px'} style={{ objectFit: 'cover' }} />
                                    <div className="form-overlay">
                                        <div className="form-overlay-content mt-5" data-aos="fade-left" data-aos-once='true'>
                                            <h2 className='text-white my-3 px-5' > Why User management</h2>
                                            <p className='text-white text-justify px-5'>User management allows administrators to manage resources and organize users according to their needs and roles.
                                               </p>
                                        </div>
                                    </div>
                                </div>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId={2} interval={3000}>
                                <div className="carousel-item-content" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0.6, 0.9))' }}>
                                    <img src={img2} className='d-block w-100' alt='...' height={'840px'} style={{ objectFit: 'cover' }} />
                                    <div className="form-overlay">
                                        <div className="form-overlay-content mt-5" data-aos="fade-left" data-aos-once='true'>
                                          <h2 className='text-white my-3 px-5' >Security</h2>
                                            <p className='text-white text-justify px-5'>User management enables administrators to grant access and manage user access and control user accounts.</p>
                                        </div>
                                    </div>
                                </div>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId={3} interval={3000}>
                                <div className="carousel-item-content" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))' }}>
                                    <img src={img} className='d-block w-100' alt='...' height={'840px'} style={{ objectFit: 'cover' }} />
                                    <div className="form-overlay">
                                        <div className="form-overlay-content mt-5" data-aos="fade-left" data-aos-once='true'>
                                            <h2 className='text-white my-3 px-5' >Data Storage</h2>
                                            <p className='text-white text-justify px-5'>User management (UM) is defined as the effective management of users and their accounts, giving them access to various IT resources </p>
                                        </div>
                                    </div>
                                </div>
                            </MDBCarouselItem>
                        </MDBCarousel>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
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
        </div>
    );
}

export default Auth;
