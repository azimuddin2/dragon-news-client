import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../image/logo.png';
import './Login.css';

const Login = () => {
    const [accepted, setAccepted] = useState(false);
    const { signIn, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified! Please verify your email address.')
                }
            })
            .catch(error => {
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return (
        <section className='form-section bg-light d-flex justify-content-center align-items-center'>
            <div className='container'>
                <Link to='/' className='d-flex justify-content-center'>
                    <img src={logo} alt="logo" className='logo'/>
                </Link>
                <Form onSubmit={handleSubmit} className='form'>
                    <h2 className='form-title'>Login your account</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-semibold'>Email address</Form.Label>
                        <Form.Control
                            name='email'
                            type="email"
                            placeholder="Enter your email address"
                            className='py-2'
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-semibold'>Password</Form.Label>
                        <Form.Control
                            name='password'
                            type="password"
                            placeholder="Enter your password"
                            className='py-2'
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={() => setAccepted(!accepted)}
                            type="checkbox"
                            label="Remember me"
                        />
                    </Form.Group>
                    <Button
                        disabled={!accepted}
                        className='px-4 w-100 p-2'
                        variant="dark"
                        type="submit"
                    >
                        Login
                    </Button>
                    <p className='text-center mt-3'>Dont’t Have An Account? <Link className='link-dark fw-semibold' to={'/register'}>Register</Link></p>
                </Form>
            </div>
        </section>
    );
};

export default Login;