// MenuItem.js

import React from 'react';

const MenuItem = () => {
  return (
    <li>
      <img src="https://via.placeholder.com/150x150" alt="Food item" />
      <h3>Food Item</h3>
      <p>Description of food item</p>
      <span>$10.00</span>
      <button>Add to Cart</button>
    </li>
  );
};

export default MenuItem;
