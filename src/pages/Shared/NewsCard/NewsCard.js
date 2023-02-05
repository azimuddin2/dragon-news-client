import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar, FaUserCircle } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author, rating, total_view } = news;
    console.log(news);

    return (
        <div>
            <CardGroup className='mb-3'>
                <Card>
                    <Card.Header className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            {
                                author?.img ?
                                    <Image
                                        src={author?.img}
                                        style={{ height: '50px' }}
                                        roundedCircle>
                                    </Image>
                                    :
                                    <FaUserCircle style={{fontSize: '40px'}}></FaUserCircle>
                            }
                            <div className='ms-2'>
                                <h6 className='mb-0'>{author?.name}</h6>
                                <p className='mb-0'>{author?.published_date}</p>
                            </div>
                        </div>
                        <div>
                            <FaRegBookmark></FaRegBookmark>
                            <FaShareAlt className='ms-2'></FaShareAlt>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Text className='mt-3'>
                            {details.length > 200 ?
                                <p>{details.slice(0, 200) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                                :
                                <p>{details}</p>
                            }
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between align-items-center">
                        <div className='d-flex align-items-center'>
                            <FaStar className='text-warning me-1'></FaStar>
                            <span>{rating?.number}</span>
                        </div>
                        <div>
                            <FaEye className='me-1'></FaEye>
                            <span>{total_view}</span>
                        </div>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default NewsCard;