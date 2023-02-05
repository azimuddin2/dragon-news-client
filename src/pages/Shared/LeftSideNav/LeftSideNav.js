import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className='position-sticky top-0'>
            <h4>All Category</h4>
            <div>
                {
                    categories.map(category => <p key={category._id}>
                        <Link to={`/category/${category._id}`}>
                            {category.name}
                        </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;