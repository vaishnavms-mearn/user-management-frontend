import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function Header() {
    const location = useNavigate()
    const handleLogout = () => {
        sessionStorage.removeItem('existingUser');
        location('/login')
    };
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#0a192f', padding: '15px', color: 'white', boxShadow: 'none' }}>
            <Container>
                <Navbar.Brand href="/user">
                    <img
                        alt=""
                        src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
                        width="33"
                        height="33"
                        className="d-inline-block align-top "

                    />{' '}
                    <h2 className='mt-2 mx-2 fs-3 text-white nav-main'>UserVerse</h2>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto menu-nav">
                        <Nav.Link href="/user-details" className='text-white nav mx-1'>View Details</Nav.Link>
                        <Nav.Link href="#aboutus" className='text-white nav mx-1'>About Us</Nav.Link>
                        <Nav.Link href="#whatwedo" className='text-white nav mx-1'>What we do</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link className="ms-auto" href="/">   <Button variant="outline-light" className="mx-3 w-100 btn-lg my-2" onClick={handleLogout}>
                            <i className="fa-solid fa-user fa-fade px-1"></i>    Logout
                        </Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;