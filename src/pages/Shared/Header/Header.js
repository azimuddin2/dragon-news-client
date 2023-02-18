import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { MdAdd } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png';

const Header = () => {
    return (
        <div>
            {['xl'].map((expand) => (
                <Navbar className='container' key={expand} bg="white" expand={expand} >
                    <Container fluid>
                        <Navbar.Brand as={Link} to='/' className='d-flex align-items-center'>
                            <img style={{ height: '40px'}} src={logo} alt="" />
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
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">
                                        <Button className='d-flex align-items-center' variant="danger">
                                            <MdAdd className='fs-5'></MdAdd>
                                            <span>Advertise</span>
                                        </Button>
                                    </Nav.Link>
                                    <Nav.Link href="#action2">
                                        <Button variant="outline-dark">
                                            <FaUserCircle className='fs-4'></FaUserCircle>
                                        </Button>
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