import React from 'react';
import pizza1 from './img/pizza1.png';
import pizza2 from './img/pizza2.png';
import pizza3 from './img/pizza3.png';
import pizza4 from './img/pizza4.png';
import pizza5 from './img/pizza5.png';
import pizza6 from './img/pizza6.png';
import pizza7 from './img/pizza7.png';
import pizza8 from './img/pizza8.png';
import pizza9 from './img/pizza9.png';

const MenuItem1 = () => {
  return (
    <li>
      <img src={pizza1} alt="Food item" />
      <h3>The Ultimate Meat Lover's</h3>
      <p>Toppings: Pepperoni, sausage, bacon, ham, and ground beef</p>
      <span>$14.99</span>
      <button>Add to Cart</button>
    </li>
  );
};

const MenuItem2 = () => {
  return (
    <li>
      <img src={pizza2} alt="Food item" />
      <h3>The Veggie Delight</h3>
      <p>Toppings: Mushrooms, onions, bell peppers, black olives, and fresh tomatoes</p>
      <span>$12.99</span>
      <button>Add to Cart</button>
    </li>
  );
};

const MenuItem3 = () => {
  return (
    <li>
      <img src={pizza3} alt="Food item" />
      <h3>The Margherita Classic</h3>
      <p>Toppings: Fresh mozzarella cheese, ripe tomatoes, basil leaves, and a drizzle of olive oil</p>
      <span>$11.99</span>
      <button>Add to Cart</button>
    </li>
  );
};

const MenuItem4 = () => {
  return (
    <li>
      <img src={pizza4} alt="Food item" />
      <h3>The BBQ Chicken Bonanza</h3>
      <p>Toppings: Grilled chicken, red onions, barbecue sauce, and cilantro</p>
      <span>$13.99</span>
      <button>Add to Cart</button>
    </li>
  );
};

const MenuItem5 = () => {
  return (
    <li>
      <img src={pizza5} alt="Food item" />
      <h3>The Gourmet Truffle</h3>
      <p>Toppings: Truffle oil, wild mushrooms, caramelized onions, and shaved Parmesan</p>
      <span>$16.99</span>
      <button>Add to Cart</button>
    </li>
  );
};

const MenuItem6 = () => {
  return (
    <li>
      <img src={pizza6} alt="Food item" />
      <h3>The Sweet and Savory</h3>
      <p>Toppings: Prosciutto, arugula, fig jam, and goat cheese</p>
      <span>$15.99</span>
      <button>Add to Cart</button>
    </li>
  );
};

const MenuItem7 = () => {
  return (
    <li>
      <img src={pizza7} alt="Food item" />
      <h3>The Spicy Inferno</h3>
      <p>Toppings: Spicy pepperoni, jalapeños, red chili flakes, and hot sauce</p>
      <span>$13.99</span>
      <button>Add to Cart</button>
    </li>
  );
};

const MenuItem8 = () => {
  return (
    <li>
      <img src={pizza8} alt="Food item" />
      <h3>The Mediterranean Magic</h3>
      <p>Toppings: Feta cheese, kalamata olives, sun-dried tomatoes, red onions, and spinach</p>
      <span>$15.99</span>
      <button>Add to Cart</button>
    </li>
  );
};

const MenuItem9 = () => {
  return (
    <li>
      <img src={pizza9} alt="Food item" />
      <h3>The Taco Fiesta</h3>
      <p>Toppings: Seasoned ground beef, cheddar cheese, lettuce, tomatoes, and a dollop of sour cream</p>
      <span>$14.99</span>
      <button>Add to Cart</button>
    </li>
  );
};

export {
  MenuItem1,
  MenuItem2,
  MenuItem3,
  MenuItem4,
  MenuItem5,
  MenuItem6,
  MenuItem7,
  MenuItem8,
  MenuItem9,
};
