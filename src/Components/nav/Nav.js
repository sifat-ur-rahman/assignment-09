import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav'>
            <div className='nav-name'>
                <h2>Quiz Time</h2>
            </div>
            <div className='nav-link'>
                <Link to='/'>Home</Link>
                <Link to='/quiz'>Quiz</Link>
                <Link to='/chirt'>Chirt</Link>
                <Link to='/blog'>Blog</Link>
            </div>

        </div>
    );
};

export default Nav;