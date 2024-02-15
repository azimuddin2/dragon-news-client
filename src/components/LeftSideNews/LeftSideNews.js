import React from 'react';
import news1 from '../../image/news1.png';
import news2 from '../../image/news2.png';
import news3 from '../../image/news3.png';
import { CiCalendar } from "react-icons/ci";

const LeftSideNews = () => {
    return (
        <div className='my-4'>
            
            <div className='w-100 mb-2'>
                <img src={news1} alt="News" className='w-100'/>
                <h3 className='fs-6 py-2'>Bayern Slams Over Flight Delay to World Cup</h3>
                <p className='d-flex align-items-center justify-content-between'>
                    <span>Sports</span>
                    <span className='d-flex align-items-center'><CiCalendar className='me-1'/> <span>Jan 4, 2024</span></span>
                </p>
            </div>
            <div className='w-100 mb-2'>
                <img src={news2} alt="News" className='w-100'/>
                <h3 className='fs-6 py-2'>Bayern Slams Over Flight Delay to World Cup</h3>
                <p className='d-flex align-items-center justify-content-between'>
                    <span>Sports</span>
                    <span className='d-flex align-items-center'><CiCalendar className='me-1'/> <span>Jan 4, 2024</span></span>
                </p>
            </div>
            <div className='w-100 mb-2'>
                <img src={news3} alt="News" className='w-100'/>
                <h3 className='fs-6 py-2'>Bayern Slams Over Flight Delay to World Cup</h3>
                <p className='d-flex align-items-center justify-content-between'>
                    <span>Sports</span>
                    <span className='d-flex align-items-center'><CiCalendar className='me-1'/> <span>Jan 4, 2024</span></span>
                </p>
            </div>

        </div>
    );
};

export default LeftSideNews;