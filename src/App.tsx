import React from 'react';

import CityList from './containers/city_list';
import ActiveCity from './containers/active_city';
import './App.scss';


export type CityData = { name: string, address: string, slug: string }

export type AppState = {
  cities: { name: string, address: string, slug: string }[],
  selectedCity: CityData
}

const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
