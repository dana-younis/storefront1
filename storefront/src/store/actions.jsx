export const activeCategory = (payload) => {
    return {
      type: 'ACTIVE_CATEGORY',
      payload
    };
  };

  export function addToCart(payload) {
    return {
      type: 'ADD_TO_CART',
      payload
    };
  }


  export function remove(payload) {
    return {
      type: 'REMOVE_FROM_CART',
      payload
    };
  } 