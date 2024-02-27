import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, Carousel, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import entertainment from '../../../image/entertainment.png';
import internationalNew from '../../../image/international-news.png';
import sport from '../../../image/sport.png';
import qZone1 from '../../../image/qZone1.png';
import qZone2 from '../../../image/qZone2.png';
import qZone3 from '../../../image/qZone3.png';

const RightSideNav = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleSignInWithGoogle = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    };

    return (
        <div className='sticky-lg-top'>
            <ButtonGroup className='w-100' vertical>
                <Button
                    onClick={handleSignInWithGoogle}
                    className='d-flex align-items-center justify-content-center mb-2'
                    variant="outline-primary"
                >
                    <FaGoogle></FaGoogle>
                    <span className='ms-1'>Login via Google</span>
                </Button>
                <Button
                    className='d-flex align-items-center justify-content-center mb-2'
                    variant="outline-dark"
                >
                    <FaGithub></FaGithub>
                    <span className='ms-1'>Login via Github</span>
                </Button>
                <Button className='d-flex align-items-center justify-content-center mb-2' variant="outline-danger">
                    <FaFacebook></FaFacebook>
                    <span className='ms-1'>Login via Facebook</span>
                </Button>
            </ButtonGroup>
            <div className='mt-2'>
                <h6>Find Us On</h6>
                <ListGroup>
                    <ListGroup.Item className='mb-2 d-flex align-items-center'>
                        <FaFacebook></FaFacebook>
                        <span className='ms-1'>Facebook</span>
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2 d-flex align-items-center'>
                        <FaYoutube></FaYoutube>
                        <span className='ms-1'>YouTube</span>
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2 d-flex align-items-center'>
                        <FaTwitter></FaTwitter>
                        <span className='ms-1'>Twitter</span>
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2 d-flex align-items-center'>
                        <FaWhatsapp></FaWhatsapp>
                        <span className='ms-1'>Whatsapp</span>
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2 d-flex align-items-center'>
                        <FaLinkedin></FaLinkedin>
                        <span className='ms-1'>Linkedin</span>
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2 d-flex align-items-center'>
                        <FaInstagram></FaInstagram>
                        <span className='ms-1'>Instagram</span>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={entertainment}
                            alt="Entertainment"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={internationalNew}
                            alt="InternationalNew"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={sport}
                            alt="sport"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='bg-light text-center py-4 mt-2'>
                <h2 className='text-start fs-4 ms-4'>Q-Zone</h2>
                <img src={qZone1} alt="Q Zone" />
                <img src={qZone2} alt="Q Zone" />
                <img src={qZone3} alt="Q Zone" />
            </div>
        </div>
    );
};

export default RightSideNav;