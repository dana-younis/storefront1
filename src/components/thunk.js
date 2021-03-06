export const getRemoteData = () => {
  return async (dispatch) => {
    const raw = await fetch('https://api-js401.herokuapp.com/api/v1/products');
    const results = await raw.json();
    dispatch(getAction(results.results));
  };
};

export const getAction = (payload) => {
  return {
    type: 'GET ',
    payload,
  };
};
