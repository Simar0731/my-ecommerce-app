import React, { useContext } from 'react';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
`;

const ItemImage = styled.img`
  width: 100px;
  height: auto;
`;

const ItemDetails = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const ItemName = styled.h2`
  font-size: 1.2em;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 1em;
  margin: 10px 0;
`;

const ItemQuantity = styled.input`
  width: 50px;
  padding: 5px;
  margin-right: 10px;
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <Item>
      <ItemImage src={item.image} alt={item.name} />
      <ItemDetails>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
        <div>
          <ItemQuantity
            type="number"
            value={item.quantity}
            onChange={handleQuantityChange}
            min="1"
          />
          <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
        </div>
      </ItemDetails>
    </Item>
  );
};

export default CartItem;
