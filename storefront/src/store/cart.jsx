let initialState = [];

export default function cartReducer(state = initialState, action) {
  let { type, payload } = action;
  console.log('payload', payload);
  switch (type) {
    case 'ADD':
      payload.count = 1;
      if (payload.inventoryCount !== 0) {
        return [...state, payload];
      } else {
        return state;
      }
      if (!state.length) return [payload];
      let added = false;
      let cartItems = [...state];
      cartItems = cartItems.map((item) => {
        if (item.name === payload.name) {
          added = true;
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      if (!added) return [...cartItems, payload];
      return cartItems;

    case 'REMOVE':
      let index = null;
      let cartItemsAfterDecrement = state.map((item, idx) => {
        if (item.name === payload.name) {
          item = { ...item, count: item.count - 1 };
          if (item.count === 0) index = idx;
          return item;
        }
        return item;
      });
      if (index !== null) cartItemsAfterDecrement.splice(index, 1);
      return cartItemsAfterDecrement;

    default:
      return state;
  }
}

export function addToCart(payload) {
  return {
    type: 'ADD',
    payload,
  };
}

export function remove(payload) {
  return {
    type: 'REMOVE',
    payload,
  };
}
