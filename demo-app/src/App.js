import React from 'react';

import data from './db.json';

import { WidgetToolQuery } from './queries/widgets/WidgetToolQuery';
import { CarToolQuery } from './queries/cars/CarToolQuery.js';

export const App = () => {
  //react fragment
  return <>
    <WidgetToolQuery />
    <CarToolQuery />
  </>;
};
