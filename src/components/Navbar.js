import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcon } from '../icons';
import '../index.css';

export const Navbar = () => {
const {amount} = useSelector((store) => {return store.cart})
return (
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
