import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from '../shared/ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ cars: initialCars }) => {

  const [ cars, setCars ] = useState(initialCars);
  const [ editCarId, setEditCarId ] = useState(-1);

  const editCar = carId => {
    setEditCarId(carId);
  };

  const addCar = car => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    setCars(cars.filter(car => car.id !== carId));
    setEditCarId(-1);
  };

  const saveCar = car => {
    const newCars = cars.concat();
    const carIndex = newCars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  const cancelCar = () => setEditCarId(-1);

  const carTableProps = {
    cars,
    editCarId,
    onEditCar: editCar,
    onDeleteCar: deleteCar,
    onSaveCar: saveCar,
    onCancelCar: cancelCar,
  };

  return <>
    <ToolHeader headerText="Car Tool" />
    <CarTable {...carTableProps} />
    <CarForm buttonText="Add Car" onSubmitCar={addCar} />
  </>;

};

CarTool.propTypes= {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.number.iRequired
    }),
  ).isRequired,
};