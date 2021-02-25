import { Component } from "react";
import { connect } from 'react-redux';

import { AppState, CityData } from '../App';


type ActiveCityProps = {
  city: CityData
}

class ActiveCity extends Component<ActiveCityProps, {}> {
  render() {
    const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`;
    return (
      <div className="active-city">
          <h3>{this.props.city.name}</h3>
          <p>{this.props.city.address}</p>
          <img src={url} width="100%" alt=""/>
      </div>
    )
  }
}

function mapStateToProps(state: AppState) {
  return {
    city: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
