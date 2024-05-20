//Banner Component of user page
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Vector from '../Assets/Vector.png';
import Animation from './Animation';
function Banner() {
    Animation()
    return (
        <div id='banner' className='my-5' data-aos="fade-up" >
            <Container>
                <Row className=' px-lg-5 px-md-0'>
                    <Col className='my-3 ps-3' md={6}>
                        <h2 className='mt-5 mb-3 text-warning first-heading fs-1'><br></br>User Verse</h2>
                        <h5 className='text-danger sec-heading my-4'>User management enables administrators to grant access and manage user access and control user accounts. A user management system forms an integral part of identity and access management (IAM) and serves as a basic form of security.</h5>
                        <div className="banner-button mt-5">
                            <a class="btn btn-outline-primary mx-2 work-button" href='/user-details'>View Your Details</a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={Vector} className='mt-3 banner-image' width={'100%'} height={'auto'} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner