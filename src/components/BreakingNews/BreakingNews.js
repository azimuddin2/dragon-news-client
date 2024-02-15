import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div>
            <Marquee pauseOnHover={true} speed={100} className=' bg-light pt-3'>
                <p className='px-4'><span className='fw-bold'>Sport News:</span> Sport in Bangladesh is a popular form of entertainment as well as an essential part of Bangladeshi culture. Cricket is the most popular sport in Bangladesh followed by football.</p>
                <p className='px-4'><span className='fw-bold'>Entertainment News:</span> The media and entertainment industry consists of film, television, These segments include movies, TV shows, radio shows, news, music, newspapers, magazines, and books. </p>
                <p> <span className='fw-bold'>International News:</span> US President Joe Biden said Monday he hoped a ceasefire in Gaza could start by the beginning of next week.</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;