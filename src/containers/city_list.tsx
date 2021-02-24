import { Component } from "react";
import City from './city';

type CityListProps = {
  cities: { name: string, address: string, slug: string }[]
}

class CityList extends Component<CityListProps, {}> {
  render() {
    return (
      <ul className="cities">
        {this.props.cities.map(city => <City name={city.name} />)}
      </ul>
    )
  }
}

export default CityList;