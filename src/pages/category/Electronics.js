import React from 'react';
import ProductCard from '../../components/ProductCard';
import electronicsProducts from '../../data/electronic';

const Electronics = () => {
  return (
    <div>
      <h1>Electronics Products</h1>
      <div className="products-container">
        {electronicsProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Electronics;
