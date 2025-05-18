import React from 'react'
import '../Breadcrums/Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

 const Breadcrums = (props) => {
  const { product } = props;

  // Return nothing or a loading message if product is undefined
  if (!product) {
    return <div className='breadcrum'>Loading...</div>;
  }

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' /> {product.category} <img src={arrow_icon} alt='' /> {product.name}
    </div>
  );
};

export default Breadcrums;