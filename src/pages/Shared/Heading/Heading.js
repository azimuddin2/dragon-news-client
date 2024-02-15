import React from 'react';
import logo from '../../../image/logo.png';
import moment from 'moment';
import BreakingNews from '../../../components/BreakingNews/BreakingNews';

const Heading = () => {
    return (
        <div className='container'>
            <div className='text-center'>
                <img src={logo} alt="logo" />
                <p className='m-0'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                <div>
                    <BreakingNews></BreakingNews>
                </div>
            </div>
        </div>
    );
};

export default Heading;