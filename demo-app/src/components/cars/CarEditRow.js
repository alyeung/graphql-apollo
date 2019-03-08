import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CarEditRow = ({ car, onSaveCar, onCancelCar }) => {

  const [carForm, setCarForm] = useState({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  return <tr>
    <td>{car.id}</td>
    <td><input type="text" id="make-input" value={carForm.make}
      onChange={e => setCarForm({ ...carForm, make: e.target.value })} /></td>
    <td><input type="text" id="model-input" value={carForm.model}
      onChange={e => setCarForm({ ...carForm, model: e.target.value })} /></td>
    <td><input type="number" id="year-input" value={carForm.year}
      onChange={e => setCarForm({ ...carForm, year: Number(e.target.value) })} /></td>
    <td><input type="text" id="color-input" value={carForm.color}
      onChange={e => setCarForm({ ...carForm, color: e.target.value })} /></td>
    <td><input type="number" id="price-input" value={carForm.price}
      onChange={e => setCarForm({ ...carForm, price: Number(e.target.value) })} /></td>
    <td>
      <button type="button" onClick={() => onSaveCar({ ...carForm, id: car.id })}>Save</button>
      <button type="button" onClick={onCancelCar}>Cancel</button>
    </td>
  </tr>;
};

CarEditRow.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }),
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};