import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </Card>
  );
};

export default ProductCard;
