import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './Register.css';

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
        <div className='p-3 p-lg-5 shadow-sm bg-white rounded'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={() => setAccepted(!accepted)}
                        label={<>Accept <Link to='/terms'>Terms and conditions</Link></>} />
                </Form.Group>
                <Button disabled={!accepted} className='px-4' variant="primary" type="submit">Register</Button>
            </Form>
        </div>
    );
};

export default Register;