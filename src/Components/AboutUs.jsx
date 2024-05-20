import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function AboutUs() {
    return (
        <div className='' style={{ marginTop: '160px' }} id='aboutus' data-aos="fade-down" data-aos-once='true'>
            <h1 className='text-center home-heading my-5'>About US</h1>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="3" md={6}>
                        <h4 className='mt-5  fs-5 about-me-h4 about-me-text'>
                            Interested to know about us? <br />Lets Have a Talk
                        </h4>
                    </Col>
                    <Col lg="5" md={6}>
                        <p className='about-me-p'>
                            This a User management Website which provide high security to your website. We can view your user details by clicking the view your details button in banner section
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs