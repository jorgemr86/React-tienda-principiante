const cartReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CART':
      return {
        ...state,
        isCartOpen: action.payload.toggle,
      };

    case 'ADD_TO_CART':
      const newItem = action.payload.item;
      const newItemId = newItem.id;
      const itemExist = state.cartItems.some((item) => item.id === newItemId);

      let updatedCartItems = null;

      if (itemExist) {
        updatedCartItems = state.cartItems.map((item) =>
          item.id === newItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCartItems = [...state.cartItems, { ...newItem, quantity: 1 }];
      }

      return {
        ...state,
        cartItems: updatedCartItems,
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.itemId
        ),
      };

    case 'INCREMENT':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case 'DECREMENT':
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload.itemId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity !== 0),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
