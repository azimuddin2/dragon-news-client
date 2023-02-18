import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

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
                            <img style={{ height: '40px' }} src={logo} alt="" />
                            <span className='fs-5 fw-semibold ms-1'>Dragon News</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='d-flex align-items-center'>
                                    <img style={{ height: '40px', margin: '0' }} src={logo} alt="" />
                                    <span className='fs-5 fw-semibold ms-1'>Dragon News</span>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                                    {/* <Nav.Link href="#action1">
                                        <Button className='d-flex align-items-center' variant="danger">
                                            <MdAdd className='fs-5'></MdAdd>
                                            <span>Advertise</span>
                                        </Button>
                                    </Nav.Link> */}
                                    {
                                        user?.uid ?
                                            <>
                                                <Button variant="primary" onClick={handleLogOut}>Logout</Button>
                                                <span className='ms-2'>{user?.displayName}</span>
                                            </>
                                            :
                                            <>
                                                <Nav.Link as={Link} to="/register">
                                                    <Button variant="primary">Register</Button>
                                                </Nav.Link>
                                                <Nav.Link as={Link} to="/login">
                                                    <Button variant="danger">Login</Button>
                                                </Nav.Link>
                                            </>
                                    }
                                    <Nav.Link as={Link} to="/profile-setting">
                                        {
                                            user?.photoURL ?
                                                <Image className='border border-2 border-warning' style={{ height: '34px' }} roundedCircle src={user?.photoURL}></Image>
                                                :
                                                <FaUserCircle className='fs-3'></FaUserCircle>
                                        }
                                    </Nav.Link>
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