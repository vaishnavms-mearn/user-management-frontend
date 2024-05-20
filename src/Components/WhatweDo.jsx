import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import whatwedo1 from '../Assets/whatwedo1.png';
import whatwedo2 from '../Assets/whatwedo2.png';

function WhatweDo() {
    return (
        <div id="whatwedo" data-aos="fade-down" data-aos-once='true'>
            <Container style={{ marginTop: '200px', marginBottom: '200px' }}>
                <h1 className='text-center home-heading my-5'>What we do</h1>
                <Row className='mx-5'>
                    <Col className='whatwedo-col mt-5' xs={12} md={6} lg={4} xl={6}>
                        <h1 className='mt-5'>Security</h1>
                        <p className='mt-4 text-justify fs-5'>
                            We provide data security and its maximum. We never lead data to other third-party organizations.
                            Website security is any action taken or application put in place to ensure website data is not exposed to cybercriminals or to prevent exploitation of the website in any way.
                        </p>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={6} className='features-col pl-md-5 pl-lg-0'>
                        <img
                            src={whatwedo1}
                            className='img-fluid'
                            alt=""
                            style={{ height: '400px', width: '100%', objectFit: 'cover' }}
                        />
                    </Col>
                </Row>
                <Row className='mt-5 mx-5'>
                    <Col xs={12} md={6} lg={4} xl={6} className='features-col px-0 px-md-5'>
                        <img
                            src={whatwedo2}
                            alt=""
                            className='img-fluid'
                            style={{ height: '400px', width: '100%', objectFit: 'cover' }}
                        />
                    </Col>
                    <Col className='whatwedo-col' xs={12} md={6} lg={4} xl={6}>
                        <h1 className='mt-5'>User Friendly</h1>
                        <p className='mt-4 text-justify fs-5'>
                            We provide great UI Experience for users to deal with their data easily. We’ll help you unpack what usability means and, even better, describe what a user-friendly website looks like so that you can identify any areas that you’d like to work on.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WhatweDo;
