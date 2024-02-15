import React, { useEffect, useState } from 'react';
import CustomLink from '../../../components/CustomLink/CustomLink';


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dragon-news-server-rouge-eight.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className='sticky-lg-top'>
            <h4>All Category</h4>
            <div>
                {
                    categories.map(category => <p key={category._id}>
                        <CustomLink to={`/category/${category._id}`}>
                            {category.name}
                        </CustomLink>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;