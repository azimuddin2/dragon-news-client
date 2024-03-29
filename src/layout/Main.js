import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import LeftSideNav from '../pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../pages/Shared/RightSideNav/RightSideNav';
import Heading from '../pages/Shared/Heading/Heading';

const Main = () => {
    return (
        <div>
            <Heading></Heading>
            <Header></Header>
            <div className='py-4'>
                <Container>
                    <Row>
                        <Col lg="2" className='d-none d-lg-block'>
                            <LeftSideNav></LeftSideNav>
                        </Col>
                        <Col lg="7">
                            <Outlet></Outlet>
                        </Col>
                        <Col lg="3" className='d-none d-lg-block'>
                            <RightSideNav></RightSideNav>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;