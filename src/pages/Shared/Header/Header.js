import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { SiDesignernews } from 'react-icons/si';
import { GrFormAdd } from 'react-icons/gr';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            {['xl'].map((expand) => (
                <Navbar className='container' key={expand} bg="white" expand={expand}>
                    <Container fluid>
                        <Navbar.Brand href="#" className='d-flex align-items-end'>
                            <SiDesignernews className='text-primary fs-1'></SiDesignernews>
                            <span className='fs-5'>Dragon News</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Dragon News
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">
                                        <Button variant="danger d-flex align-items-center">
                                            <GrFormAdd className='text-white fs-4'></GrFormAdd>
                                            <span>Advertise</span>
                                        </Button>
                                    </Nav.Link>
                                    <Nav.Link href="#action2">
                                        <Button variant="outline-dark">
                                            <FaUserCircle></FaUserCircle>
                                        </Button>
                                    </Nav.Link>

                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
};

export default Header;