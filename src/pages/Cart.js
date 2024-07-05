import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CartContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const CartTitle = styled.h1`
  text-align: center;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CartTotal = styled.div`
  text-align: right;
  font-size: 1.5em;
  margin-top: 20px;
`;

const ProceedButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 1.2em;
  color: white;
  background-color: #007bff;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const Cart = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleProceedToBuy = () => {
    alert('Proceeding to buy!');
    navigate('/checkout');
  };

  return (
    <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      <CartItems>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItems>
      <CartTotal>Total: ${getTotalPrice()}</CartTotal>
      <ProceedButton onClick={handleProceedToBuy}>Proceed to Buy</ProceedButton>
    </CartContainer>
  );
};

export default Cart;
