
import { CityData } from '../containers/city_list';

const activeCityReducer = (state: CityData, action: {type: string, payload: CityData}) => {
  if (state === undefined) {
    return {};
  }
  
  switch (action.type) {
  case 'SET_ACTIVE':
    return action.payload;
  default:
    return state;
  }
}

export default activeCityReducer;
