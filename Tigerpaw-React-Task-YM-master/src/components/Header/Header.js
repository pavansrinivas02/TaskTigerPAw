import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

import logo from '../../assets/images/logo.png';
import photo from '../../assets/images/photo.jpeg';
import itemIcons from '../../assets/icons/icons.js';
import './Header.css';

//function to get the current date and time 
const formatDateTime = (date) => {
    const dayOptions = { weekday: 'short' };
    const day = date.toLocaleDateString(undefined, dayOptions);

    //time format
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    };
    const time = date.toLocaleTimeString(undefined, timeOptions);

    //date format
    const dateOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };
    const formattedDate = date.toLocaleDateString(undefined, dateOptions);

    return { day, time, formattedDate };
};

const TopNavbar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    // Update the current date and time every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Clean up the interval set
        return () => clearInterval(intervalId);
    }, []);

    //destructure the date and time
    const { day, time, formattedDate } = formatDateTime(currentDateTime);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-gray">
            {/* logo and brand name */}
            <div className="text-center text-yellow ml-3">
                <img className="d-block mx-auto" src={logo} alt="" width="72" height="57" />
                <Link to="/" className='brand-name text-yellow'>TIGERPAW</Link>
            </div>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto"></ul>

                {/* Notification icon */}
                <div className='text-yellow'>
                    {itemIcons['Notification']}<Badge bg="danger">9</Badge>
                </div>

                {/* date and time */}
                <div className='text-yellow ml-3 font-weight-bold'>
                    <div>{formattedDate}</div>
                    <div>{day} {time}</div>
                </div>

                {/* profile photo and name */}
                <div className='mx-3 photo'>
                    <img className="d-block mx-auto  photo" src={photo} alt="" width="60" height="60" />
                </div>
                <span className='text-white'> PAVAN SG</span>

            </div>
        </nav>
    );
}

export default TopNavbar;
