import React from 'react';
import logo from '../../../image/logo.png';
import moment from 'moment';
import BreakingNews from '../../../components/BreakingNews/BreakingNews';

const Heading = () => {
    return (
        <div className='container mt-3'>
            <div className='text-center'>
                <img src={logo} alt="logo" className='logo'/>
                <p style={{color: '#706F6F'}} className='m-1 mt-2'>Journalism Without Fear or Favour</p>
                <p style={{color: '#706F6F', fontWeight: '500'}}>{moment().format("dddd, MMMM D, YYYY")}</p>
                <div>
                    <BreakingNews></BreakingNews>
                </div>
            </div>
        </div>
    );
};

export default Heading;