import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className='text-decoration-none'
            style={{
                color: match ? '#0d6efd' : 'black',
                fontWeight: match ? '600' : '400',
                borderBottom: match ? '2px solid #0d6efd' : 'none',
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;