import { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCities } from '../actions';
import City from './city';


type CityListProps = {
  cities: { name: string, address: string, slug: string }[]
  setCities: () => void;
}

type AppState = {
  cities: {name: string, address: string, slug: string}[],
  selectedCity: string
}

class CityList extends Component<CityListProps, {}> {
  componentDidMount() {
    this.props.setCities();
  }

  render() {
    return (
      <ul className="cities">
        {this.props.cities.map(city => <City key={city.name} name={city.name} />)}
      </ul>
    )
  }
}

// TODO: fix dispatch type
function mapDispatchToProps(dispatch: any) {
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
