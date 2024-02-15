import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import userIcon from '../../../image/user.png';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div>
            {['xl'].map((expand) => (
                <Navbar className='container' key={expand} bg="white" expand={expand} >
                    <Container fluid>
                        <Navbar.Brand as={Link} to='/' className='d-flex align-items-center'>
                            <img style={{ height: '30px' }} src={logo} alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='d-flex align-items-center'>
                                    <img style={{ height: '30px', margin: '0' }} src={logo} alt="logo" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to="/profile" title='Profile Setting' >
                                        <Image src={userIcon} style={{ height: '40px' }} roundedCircle></Image>
                                    </Nav.Link>

                                    {
                                        user?.uid || user?.email ?
                                            <>
                                                <Button className='px-4 rounded-1' variant="dark" onClick={handleLogOut}>Logout</Button>
                                                <span className='ms-lg-2 mt-sm-2 mt-lg-0 fw-semibold'>{user?.displayName}</span>
                                            </>
                                            :
                                            <>
                                                <Nav.Link as={Link} to="/login">
                                                    <Button variant="dark" className='rounded-1 px-5'>Login</Button>
                                                </Nav.Link>
                                            </>
                                    }

                                </Nav>
                                <div className='d-lg-none mt-3'>
                                    <LeftSideNav></LeftSideNav>
                                    <RightSideNav></RightSideNav>
                                </div>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
};

export default Header;