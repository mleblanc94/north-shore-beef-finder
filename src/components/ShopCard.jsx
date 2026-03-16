import React from 'react';
import './ShopCard.css';

const ShopCard = ({ shop }) => {
  return (
    <div className="shop-card">
      <h2>{shop.name}</h2>
      <p>{shop.town}</p>
      <p>⭐ Rating: {shop.rating}</p>
      <p>💲 Avg Price: ${shop.averagePrice}</p>
      <p>{shop.notes}</p>
    </div>
  );
};

export default ShopCard;