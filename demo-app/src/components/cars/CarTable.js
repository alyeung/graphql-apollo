import React from 'react';
import PropTypes from 'prop-types';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

export const CarTable = ({
  cars, editCarId, onEditCar,
  onDeleteCar, onSaveCar, onCancelCar,
}) => 
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car => (car.id === editCarId)
        ? <CarEditRow key={car.id} car={car} onSaveCar={onSaveCar} onCancelCar={onCancelCar} />
        : <CarViewRow key={car.id} car={car} onDeleteCar={onDeleteCar} onEditCar={onEditCar} /> )}
    </tbody>
  </table>;

CarTable.propTypes = {
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
  editCarId: PropTypes.number,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func,
  onCancelCar: PropTypes.func,
};
