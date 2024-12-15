import React, { createContext, useReducer, useState } from 'react';
import styled from 'styled-components';
import cartReducer from './cartReducer';

// Create the context with a default value
const CartContext = createContext();

// CartProvider component with styled wrapper
const StyledCartProvider = styled.div`
  /* Add any global cart-related styles here */
`;

const CartProvider = ({ children }) => {
  const initialState = {
    isCartOpen: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [total, setTotal] = useState(0); // Nuevo estado para el total

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    // Lógica para agregar el producto al carrito
    dispatch({ type: 'ADD_TO_CART', payload: { item: producto } });

    // Actualizar el estado del total
    setTotal((prevTotal) => prevTotal + producto.precio);
  };

  // Dispatched actions
  const toggleCart = (toggle) => dispatch({ type: 'TOGGLE_CART', payload: { toggle } });
  const removeItem = (itemId) => dispatch({ type: 'REMOVE_FROM_CART', payload: { itemId } });
  const incrementItem = (itemId) => dispatch({ type: 'INCREMENT', payload: { itemId } });
  const decrementItem = (itemId) => dispatch({ type: 'DECREMENT', payload: { itemId } });
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    setTotal(0); // Limpiar el total al vaciar el carrito
  };

  const value = {
    ...state,
    total,
    toggleCart,
    addItem: agregarAlCarrito,
    removeItem,
    incrementItem,
    decrementItem,
    clearCart,
  };

  return (
    <StyledCartProvider>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </StyledCartProvider>
  );
};

export default CartContext;
export { CartProvider };
