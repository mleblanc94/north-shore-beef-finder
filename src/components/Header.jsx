import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';

const Header = () => {
    return (
        <div>
            <ul className='header'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/leaderboards'>Leaderboards</Link>
                <Link to='/profile'>Profile</Link>
            </ul>
        </div>
    )
}