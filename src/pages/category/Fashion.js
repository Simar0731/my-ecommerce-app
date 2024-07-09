import React from 'react';
import ProductCard from '../../components/ProductCard'; // Example: ProductCard component
import fashionProducts from '../../data/fashionData'; // Adjust path if needed

const Fashion = () => {
  return (
    <div>
      <h1>Fashion Products</h1>
      <div className="products-container">
        {fashionProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Fashion;
