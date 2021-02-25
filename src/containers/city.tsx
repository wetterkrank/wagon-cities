import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions';
import { CityData } from './city_list';


type CityProps = {
  setActiveCity: (city: CityData) => {type: string, payload: CityData},
  city: CityData
}

function City(props: CityProps) {
  return (
    <li className="list-group-item" onClick={() => props.setActiveCity(props.city)}>{props.city.name}</li>
  )
}

// TODO: dispatch type?
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    { setActiveCity: setActiveCity }, dispatch);
}

export default connect(mapDispatchToProps)(City);