import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { setActiveCity } from '../actions';
import { CityData } from '../App';


type CityProps = {
  setActiveCity: (city: CityData) => {type: string, payload: CityData},
  city: CityData
}

function City(props: CityProps) {
  return (
    <li className="list-group-item" onClick={() => props.setActiveCity(props.city)}>{props.city.name}</li>
  )
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City); // Dispatch-only case: null is needed here
