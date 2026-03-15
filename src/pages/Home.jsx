import React from 'react';
import './Home.css';
import { shops } from '../data/shops';

const Home = () => {
    return(
        <div>
            <h1>Beef Finder</h1>
            <div className='location-finder'>
                <button className='findMyLocation'>Use My Location</button>
                <input className='enter-location' placeholder='Enter City/Town'></input>
            </div>
            <div className='map'>

            </div>
        </div>
    )
}

export default Home;