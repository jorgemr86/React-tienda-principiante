import React, { useContext } from 'react';
import styled from 'styled-components';
import { LuBadge } from 'react-icons/lu';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext '; 

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  z-index: 1000;
`;

const StyledNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: 'helvetica neue', helvetica, sans-serif;
  text-decoration: none;
  color: #f5f5f5;
  margin: 0 0.5rem;
  transition: opacity 0.5s;

  span {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.35rem;
      width: 100%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.25);
      transition: transform 0.75s ease;
      transform-origin: right;
      transform: scaleX(0);
    }
  }

  &:hover {
    opacity: 1;
    span:before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  &.is-active {
    opacity: 1;
    span:before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const StyledLogo = styled.figure`
  margin: 0;
  filter: invert(100%) sepia(11%) saturate(199%) hue-rotate(277deg) brightness(113%) contrast(92%);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20%;
`;

const LogoImage = styled.img`
  display: block;
  max-width: 80px;
  height: auto;
`;

const Navbar = () => {
  const { cartItems } = useContext(CartContext); 
  const cartQuantity = cartItems ? cartItems.length : 0;
  const { toggleCart } = useContext(CartContext);

  return (
    <StyledNavbar>
      <LogoContainer>
        <StyledLogo>
          <Link to="/">
            <LogoImage src="/img/logo.png" alt="Logo" />
          </Link>
        </StyledLogo>
      </LogoContainer>

      <StyledNav>
        <ul>
          <li>
            <StyledLink to="/Sujetadores">
              <span>Sujetadores</span>
            </StyledLink>
          </li>
          <li>
          <StyledLink to="/Novedades">
           <span>Novedades</span>
          </StyledLink>
          </li>
          <li>
            <StyledLink to="/Registro">
              <span>Registro</span>
            </StyledLink>
          </li>
        </ul>
      </StyledNav>

      <StyledNav>
        <ul>
          <li>
            <StyledLink to="/Login">
              <span>Acceso</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/cart" title="Cart" onClick={() => toggleCart(true)}>
              <FaShoppingCart />
              {cartQuantity >= 1 && <LuBadge>{cartQuantity}</LuBadge>}
            </StyledLink>
          </li>
        </ul>
      </StyledNav>
    </StyledNavbar>
  );
};

export default Navbar;
