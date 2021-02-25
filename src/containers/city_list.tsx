import { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import City from './city';
import { setCities } from '../actions';
import { AppState, CityData } from '../App';

type CityListProps = {
  cities: CityData[]
  setCities: () => void;
}

class CityList extends Component<CityListProps, {}> {
  componentDidMount() {
    this.props.setCities();
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.props.cities.map(city => <City key={city.slug} city={city} />)}
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state: AppState) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
