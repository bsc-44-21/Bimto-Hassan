import React from 'react';
import { Link } from 'react-router-dom';
//the product variable will receive the product object tapanga ku productlist kuja
const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default Product;
