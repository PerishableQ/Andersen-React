const defaultState = {
  isAuth: false,
};

function reducer(state = defaultState, action) {
  console.log(action.type);
  switch (action.type) {
    case "LOG":
      return { ...state, isAuth: true };
    case "UNLOG":
      return { ...state, isAuth: false };

    default:
      return state;
  }
}

export default reducer;
