import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { IoArrowBack } from "react-icons/io5";
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details, author, rating, category_id } = news;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className='d-flex justify-content-between align-items-center my-3'>
                        <div>
                            <h6 className='fw-bold'>Author: <span className='fw-normal'>{author.name}</span></h6>
                        </div>
                        <div>
                            <h6 className='fw-bold'>Published Date: <span className='fw-normal'>{author.published_date}</span></h6>
                        </div>
                        <div className='d-flex align-items-center'>
                            <FaStar className='text-warning me-1'></FaStar>
                            <span>{rating?.number}</span>
                        </div>
                    </div>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`} className='text-decoration-none'>
                        <Button variant="primary" className='d-flex align-items-center'>
                            <IoArrowBack className='me-1'/>
                            <span>All New in this category</span>
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;