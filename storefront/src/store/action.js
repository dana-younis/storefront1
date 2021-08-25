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

export function changeActive(name) {
  return {
    type: 'CHANGE_CATEGORY',
    payload: name,
  };
}

export const reset = () => {
  return {
    type: 'RESET',
  };
};

export function getCategoryItems(name) {
  return {
    type: 'CHANGE_CATEGORY',
    payload: name,
  };
}

export function reduceInventory(product) {
  return {
    type: 'reduce_inventot',
    payload: product,
  };
}
