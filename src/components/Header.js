import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CartIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  & > svg {
    font-size: 1.5em;
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 0.9em;
`;

const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderContainer>
      <Logo>My E-Commerce</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/category/electronics">Electronics</NavLink>
        <NavLink to="/category/fashion">Fashion</NavLink>
        <NavLink to="/cart">
          <CartIcon>
            🛒
            {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
          </CartIcon>
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
