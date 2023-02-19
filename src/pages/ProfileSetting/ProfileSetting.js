import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import personalSetting from '../../image/personal-settings.gif';

const ProfileSetting = () => {
    const { user, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;

        const profile = {
            displayName: name,
            photoURL: image
        }
        updateUserProfile(profile)
            .then(() => {
                form.reset();
                toast.success('Profile Updated Successfully Done');
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <section>
            <div className='text-center rounded'>
                <img className='w-75' src={personalSetting} alt="" />
            </div>

            <div className='p-5 shadow-sm bg-white rounded'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={user?.email} disabled required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label>Your Picture</Form.Label>
                        <Form.Control name='image' type="text" placeholder="Image URL" />
                    </Form.Group>

                    <Button className='px-4' variant="primary" type="submit">Update Profile</Button>
                </Form>
            </div>
        </section>
    );
};

export default ProfileSetting;