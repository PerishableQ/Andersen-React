const defaultState = {
  favorite: [],
};

const deliteFilm = (arr, name) => {
  return arr.filter(item => {
    if (item === name) {
      return false
    } else {
      return true
    }
  })
};

// const addFilm = (arr, name) => {
//   return arr.push(name);
// }

function reducer(state = defaultState, action) {
  console.log(state.favorite, '!!!!');
  switch (action.type) {
    case "ADD":
      return { ...state, favorite: [...state.favorite, action.movieName] };
    case "SUB":
      return { ...state, favorite: deliteFilm(state.favorite, action.movieName) };

    default:
      return state;
  }
}

export default reducer;
