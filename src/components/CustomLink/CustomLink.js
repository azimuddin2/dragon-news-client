import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className='text-decoration-none rounded-1'
            style={{
                backgroundColor: match ? '#f7f7f7' : '',
                fontWeight: match ? '600' : '400',
                color: match ? 'black' : '#9F9F9F',
                padding: '6px 28px',
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;