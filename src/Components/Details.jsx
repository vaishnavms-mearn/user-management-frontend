import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { getUserAPI } from '../Services/allApi';
import EditUser from './EditUser';
import { MDBBtn } from 'mdb-react-ui-kit';
import { editUserResponseContext } from '../ContextApi/ContextShare';
import { base_Url } from '../Services/base_url';
function Details() {
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState(null);
    const { editUserRes} = useContext(editUserResponseContext)
    
    //fetch user data function
    const fetchUserData = async (token) => {
        try {
            const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
            if (existingUser && token) {
                const id = existingUser.id;
                const reqHeaders = { "Authorization": `Bearer ${token}` };
                const user = await getUserAPI(id, reqHeaders);
                setUserData(user.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        const storedToken = sessionStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            fetchUserData(storedToken);
        }
    }, [editUserRes]);

    return (
        <div>
            <div className="display-section">
                <div className="container my-5">
                    <Card className='display'>
                        <Card.Body>
                            <Row>
                                <Col md={12} xl={6}>
                                    <Card.Title>
                                        <img
                                            src={userData?.userImage ? `${base_Url}/uploads/${userData?.userImage}` : 'https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png'}
                                            className='view-image img-fluid'
                                            alt="User"
                                            style={{ height: '400px', marginTop: '40px', marginLeft: '200px' }}
                                        />
                                    </Card.Title>
                                </Col>
                                <Col md={12} xl={6}>
                                    {userData ? (
                                        <Card.Text>
                                            <h1 className='my-3 p-3 text-primary fw-bold mx-5'>User Details</h1>
                                            <div className="user-details">
                                                <p className='user-details-text'>Name: {userData?.name}</p>
                                                <p className='user-details-text'>Email: {userData?.email}</p>
                                                <p className='user-details-text'>Company: {userData?.company}</p>
                                            </div>
                                            <div className="available-days my-3">
                                                <div className="buttons mx-5">
                                                    <MDBBtn rounded size='sm'>
                                                        <EditUser data={userData} />
                                                    </MDBBtn>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    ) : (
                                        <div className="text-center">No user found</div>
                                    )}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Details;
