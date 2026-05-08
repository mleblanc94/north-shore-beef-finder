import React from 'react';
import './Home.css';
import { shops } from '../data/shops';
import ShopCard from '../components/ShopCard';
import BeefMap from '../components/BeefMap';

let findBeef = (location) => {
    console.log('You are gonna find your beef');
}

const Home = () => {
    return(
        <div>
            <h1>Beef Finder</h1>
            <div className='location-finder'>
                <button className='findMyLocation'>Use My Location</button>
                <input className='enter-location' placeholder='Enter City/Town'></input>
                <button className="find-beef-button" onClick={findBeef}>Find your beef</button>
            </div>
            <div className='map'>
                {<BeefMap shops={shops} />}
                {shops.map(shop => (
                    <ShopCard className='shop-cards' key={shop.id} shop={shop} />
                ))}

            </div>
        </div>
    )
}

export default Home;