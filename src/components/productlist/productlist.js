import React from 'react';
import Product from './Product';
//apapano tiziyikapo ma product ambiri kuchokera kuma product components kuja using product id ija thou pa sample though im still figuring out how to put ma products from ma commponents enawo
const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
