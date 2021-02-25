
// TODO: fix types in the declaration
const citiesReducer = (state: {}, action: {type: string, payload: []}) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
  case 'SET_CITIES':
    return action.payload;
  default:
    return state;
  }
}

export default citiesReducer;
