const initialState = {
  categories: [
    {
      name: 'food',

      displayName: 'food',
    },
    {
      name: 'shirts',

      displayName: 'shirts',
    },
    {
      name: 'phones',

      displayName: 'phones',
    },
    {
      name: 'electronics',

      displayName: 'electronics',
    },
    {
      name: 'console',

      displayName: 'console',
    },
  ],
  activeCategory: {},
};

export default function categoriesReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case 'RESET':
      return initialState;

    case 'CHANGE CATEGORY':
      let activeCategory = {};

      state.categories.forEach((item) => {
        if (item.name === payload) {
          activeCategory = item;
        }
      });
      return {
        categories: state.categories,
        activeCategory: activeCategory,
      };
    default:
      return state;
  }
}

export function changeActive(name) {
  return {
    type: 'CHANGE CATEGORY',
    payload: name,
  };
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}