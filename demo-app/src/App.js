import React from 'react';

import data from './db.json';

import { CarTool } from './components/cars/CarTool';
import { WidgetTool } from './components/widgets/WidgetTool';

export const App = () => {
  return <>
    <WidgetTool widgets={data.widgets} />
    <CarTool cars={data.cars} />
  </>;
};
