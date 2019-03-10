import React from 'react';

import data from './db.json';

import { CarTool } from './components/cars/CarTool';
import { WidgetToolQuery } from './queries/widgets/WidgetToolQuery';

export const App = () => {
  //react fragment
  return <>
    <WidgetToolQuery />
    <CarTool cars={data.cars} />
  </>;
};
