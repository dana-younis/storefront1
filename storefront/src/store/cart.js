const initialState = [];

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      if (payload.inStock !== 0) {
        return [...state, payload];
      } else {
        return state;
      }

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

export function addToCart(product) {
  return {
    type: 'ADD',
    payload: product,
  };
}

export function remove(payload) {
  return {
    type: 'REMOVE',
    payload,
  };
}
