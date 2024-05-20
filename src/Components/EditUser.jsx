import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import { base_Url } from '../Services/base_url';
import { editUserAPI } from '../Services/allApi';
import { editUserResponseContext } from '../ContextApi/ContextShare';
function EditUser({ data }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [token, setToken] = useState("");
    const { setEditUserRes } = useContext(editUserResponseContext)
    const [userDetails, setUserDetails] = useState({
        id: data.id,
        name: data.name,
        email: data.email,
        company: data.company,
        image: ""
    });

    const [preview, setPreview] = useState("");

    useEffect(() => {
        if (userDetails.image) {
            setPreview(URL.createObjectURL(userDetails.image));
        } else {
            setPreview(data.userImage ? `${base_Url}/uploads/${data.userImage}` : `https://content.hostgator.com/img/weebly_image_sample.png`);
        }
    }, [userDetails.image, data.userImage]);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setUserDetails({ ...userDetails, image: e.target.files[0] });
        }
    };

    useEffect(() => {
        const storedToken = sessionStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const userEdit = async () => {
        const { id, name, company, image } = userDetails;
        if (!name || !company) {
            alert("Please Enter Details");
        } else {
            const reqBody = new FormData();
            reqBody.append("name", name);
            reqBody.append("company", company);
            if (image) {
                reqBody.append("userImage", image);
            }

            const reqHeader = {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            };

            try {
                const result = await editUserAPI(id, reqBody, reqHeader);
                if (result.status === 200) {
                    handleClose();
                    setEditUserRes(result.data)
                    toast.success("User updated successfully");
                } else {
                    toast.error(result.response.data.message);
                }
            } catch (error) {
                toast.error("An error occurred while updating the user");
            }
        }
    };

    return (
        <div>
            <MDBBtn rounded size='sm' onClick={handleShow}>
                <i className='fa-solid fa-pen mx-2'></i>Edit
            </MDBBtn>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className='col'>
                            <label>
                                <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={handleImageChange}
                                />
                                <img
                                    src={preview}
                                    width={'300px'}
                                    height={'300px'}
                                    alt=""
                                />
                            </label>
                        </div>
                        <div className="col">
                            <form action="" autoComplete="off">
                                <MDBInput
                                    className='form-control mb-3'
                                    value={userDetails.name}
                                    onChange={e => setUserDetails({ ...userDetails, name: e.target.value })}
                                    autoComplete="off"
                                    label='Name'
                                    id='formControlLg'
                                    type='text'
                                    size="lg"
                                />
                                <MDBInput
                                    className='form-control mb-3'
                                    value={userDetails.company}
                                    onChange={e => setUserDetails({ ...userDetails, company: e.target.value })}
                                    label='Company'
                                    id='formControlLg'
                                    type='text'
                                    size="lg"
                                    autoComplete="off"
                                />
                            </form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={userEdit}>Update</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default EditUser;
