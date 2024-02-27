import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className=' shadow p-4 rounded-2'>
            <h2>Here is our terms and conditions</h2>
            <h3>Go back to : <Link to='/register'>Register</Link></h3>
            <p>Your account credentials (username and password) are strictly personal to you. They are not allowed to be shared with any other person/media. If Account Credentials are shared with any other person/medium, your Account may be terminated at any time without notice and you may no longer use this Account.</p>
        </div>
    );
};

export default TermsAndConditions;