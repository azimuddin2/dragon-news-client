import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png';

const Register = () => {
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name);
                handleVerifyEmail();
                toast.success('Please verify your email address.');
            })
            .catch(error => {
                toast.error(error.message)
            })
    };

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                toast.error(error.message)
            })
    };

    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => { })
            .catch((error) => {
                toast.error(error.message)
            })
    };

    return (
        <section className='form-section bg-light d-flex justify-content-center align-items-center'>
            <div className='container'>
                <Link to='/' className='d-flex justify-content-center'>
                    <img src={logo} alt="logo" className='logo' />
                </Link>
                <Form onSubmit={handleSubmit} className='form'>
                    <h2 className='form-title'>Register your account</h2>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className='fw-semibold'>Your name</Form.Label>
                        <Form.Control
                            name='name'
                            type="text"
                            placeholder="Enter your name"
                            className='py-2'
                            required
                        />
                    </Form.Group>
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
                            placeholder="Password"
                            className='py-2'
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            onClick={() => setAccepted(!accepted)}
                            label={<>Accept <Link to='/terms' className=' link-dark '>Terms & conditions</Link></>} />
                    </Form.Group>
                    <Button
                        disabled={!accepted}
                        className='px-4 w-100 py-2'
                        variant="dark"
                        type="submit"
                    >
                        Register
                    </Button>
                    <p className='text-center mt-3'>Already Have An Account?<Link className='link-dark fw-semibold' to={'/login'}>Login</Link></p>
                </Form>
            </div>
        </section>
    );
};

export default Register;