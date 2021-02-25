import { CityData } from '../App';

const citiesReducer = (state: CityData[], action: {type: string, payload: CityData[]}) => {
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
