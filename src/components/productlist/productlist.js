import React from 'react';
import Product from './Product';
//we will create a productlist function where we will have the product object and will call the product function from the product component
const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Mpunga Killombelo',
      description: 'This is the 1st grade from Phalombe and chikwawa',
      price: 2000.99,
      imageUrl: '',
    },
    {
      id: 2,
      name: 'Laptop',
      description: 'This is the 12th generation i7,Ram 8GB,2.99HZ',
      price:"MK 490 000.99",
      imageUrl: '',
    },
    {
    id: 3,
    name: 'Oraimo headset',
    description: 'This is the best head set with quality sound ',
    price:"MK 4 000.99",
    imageUrl: '',},
    {
    id: 4,
    name: 'oraimo Power bank',
    description: 'power bank that keeps 100watts and can charge more than 6 devices at once ',
    price:"MK 49 000.00",
    imageUrl: '',},
    //apapa titha kumayikabe ma products ngat tufuna kuwonjezera
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
