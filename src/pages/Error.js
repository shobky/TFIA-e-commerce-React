import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/error.css"
const Error = () => {
  return (
    <div>
      <p className='text'> oops</p>
      <p className='text2'>seems like there is something wrong we couldn't get that page</p>
      <ol className='error-to-pages'>
        <Link className='error-to-pages-list-item' to="/"><li>Home</li></Link>
        <Link className='error-to-pages-list-item' to="/shop"><li>Shop</li></Link>
        <Link className='error-to-pages-list-item' to="/shop/cart"><li>Cart</li></Link>

      </ol>
    </div>
  )
}

export default Error