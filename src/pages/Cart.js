import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import CartContext from '../context/CartContext ';

const CartWrapper = styled.div`
  display: ${({ isCartOpen }) => (isCartOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  width: 500px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  border-left: 2px solid #f5f5f5;
  margin-top: 100px;
  color: #131313;
  overflow-y: auto;
`;

const CartContent = styled.div`

  position: absolute;
  top: 0;
  right: 0;
  max-width: 600px;
  width: 100%;
  height: 100%;
`;

const CartHead = styled.div`
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  padding: 1rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  span {
    font-size: 2.2rem;
    line-height: 0.8;
    color: white;
  }
`;

const CartBody = styled.div`
  padding: 5rem 1.5rem 2rem;
  max-height: calc(100% - 3rem);
  overflow-x: hidden;
  overflow-y: auto;
`;

const CartItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 0.5fr 0.2fr;
  align-items: center;
  gap: 2.2rem;
  margin-bottom: 1.5rem;
`;

const CartItemsImg = styled.figure`
  height: 120px;
  width: 100%;
  max-width: 120px;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const CartItemsInfo = styled.div`
  font-weight: 600;
  margin-top: 0.5rem;
`;

const Price = styled.h3`
  font-weight: 600;
  margin-top: 0.5rem;
`;

const CartItemsQuantity = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
  background-color: transparent;
  padding: 0.3rem 0;

  .span {
    font-size: 1.2rem;
    background-color: #131313;
    line-height: 0.5;
    padding: 0.4rem;
    user-select: none;
    cursor: pointer;
  }
`;

const CartItemsDelete = styled.div`
  font-size: 2rem;
  line-height: 0.5;
  text-align: center;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const CartFoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 500px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 2;
  margin-bottom: 100px;
`;

const TotalPrice = styled.p`
  margin: 0;
`;

const CheckoutBtn = styled.button`
  background-color: $text-color;
  color: #000;
  font-size: 1rem;
  padding: 0.4rem 0.8rem;

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Cart = () => {
  const { cartItems, toggleCart, removeItem, incrementItem, decrementItem } = useContext(CartContext);
  const { isCartOpen } = useContext(CartContext);
  useEffect(() => {
    const handleBodyScroll = () => {
      const docBody = document.body;
      isCartOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide');
    };

    handleBodyScroll();

    return () => {
      handleBodyScroll();
    };
  }, [isCartOpen]);

  const closeCartOutside = (e) => {
    if (e.target.id === 'cart') {
      toggleCart(false);
    }
  };

  useEffect(() => {
    const closeCartOutside = (e) => {
      if (e.target.id === 'cart') {
        toggleCart(false);
      }
    };

    window.addEventListener('click', closeCartOutside);

    return () => {
      window.removeEventListener('click', closeCartOutside);
    };
  }, [toggleCart]);

  const cartQuantity = cartItems ? cartItems.length : 0;

  const cartTotal = cartItems ? cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0) : 0;

  return (
    <CartWrapper  id="cart" onClick={closeCartOutside} isCartOpen={isCartOpen}>
      <CartContent>
        <CartHead>
          <h2>
            Carro <small>({cartQuantity})</small>
          </h2>
          <CloseBtn onClick={() => toggleCart(false)}>
            <span>&#215;</span>
          </CloseBtn>
        </CartHead>

        <CartBody>
          {cartQuantity === 0 ? (
            <h2>vacio</h2>
          ) : (
            cartItems.map((item) => {
              const { id, img, title, precio, quantity } = item;
              const itemTotal = precio * quantity;

              return (
                <CartItems key={id}>
                  <CartItemsImg>
                    <img src={img} alt="product-img" />
                  </CartItemsImg>

                  <CartItemsInfo>
                    <h4>{title}</h4>
                    <Price>$ {itemTotal.toLocaleString()}</Price>
                  </CartItemsInfo>

                  <CartItemsQuantity>
                    <span onClick={() => decrementItem(id)}>&#8722;</span>
                    <b>{quantity}</b>
                    <span onClick={() => incrementItem(id)}>&#43;</span>
                  </CartItemsQuantity>

                  <CartItemsDelete title="Remove Item" onClick={() => removeItem(id)}>
                    <span>&times;</span>
                  </CartItemsDelete>
                </CartItems>
              );
            })
          )}
        </CartBody>

        <CartFoot>
          <h3>
            <small>Total:</small>
            <TotalPrice>${cartTotal.toLocaleString()}</TotalPrice>
          </h3>

          <CheckoutBtn type="button" disabled={cartQuantity === 0}>
            Comprar
          </CheckoutBtn>
        </CartFoot>
      </CartContent>
    </CartWrapper>
  );
};

export default Cart;
