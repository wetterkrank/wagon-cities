import { Component } from "react";
import { connect } from 'react-redux';

import { AppState, CityData } from './city_list';


type ActiveCityProps = {
  city: CityData
}

class ActiveCity extends Component<ActiveCityProps, {}> {
  render() {
    return (
      <div className="active-city">
          <h3>...</h3>
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
