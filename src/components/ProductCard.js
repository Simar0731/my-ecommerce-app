import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p> {/* Updated currency symbol */}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </Card>
  );
};

export default ProductCard;
