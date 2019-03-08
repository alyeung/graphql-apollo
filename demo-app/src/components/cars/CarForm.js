import React, { useState } from 'react';
import PropTypes from 'prop-types';

const initialCarForm = () => ({
  make: '',
  model: '',
  year: 1900,
  color: '',
  price: 0,
});

export const CarForm = ({ buttonText, onSubmitCar }) => {

  const [ carForm, setCarForm ] = useState(initialCarForm());

  const submitCar = () => {
    onSubmitCar({ ...carForm });
    setCarForm(initialCarForm());
  };

  return <form>
    <div>
      <label htmlFor="make-input">Make:</label>
      <input type="text" id="make-input" value={carForm.make}
        onChange={e => setCarForm({ ...carForm, make: e.target.value })} />
    </div>
    <div>
      <label htmlFor="model-input">Model:</label>
      <input type="text" id="model-input" value={carForm.model}
        onChange={e => setCarForm({ ...carForm, model: e.target.value })} />
    </div>
    <div>
      <label htmlFor="year-input">Year:</label>
      <input type="number" id="year-input" value={carForm.year}
        onChange={e => setCarForm({ ...carForm, year: Number(e.target.value) })} />
    </div>
    <div>
      <label htmlFor="color-input">Color:</label>
      <input type="text" id="color-input" value={carForm.color}
        onChange={e => setCarForm({ ...carForm, color: e.target.value })} />
    </div>
    <div>
      <label htmlFor="price-input">Price:</label>
      <input type="number" id="price-input" value={carForm.price}
        onChange={e => setCarForm({ ...carForm, price: Number(e.target.value) })} />
    </div>
    <button type="button" onClick={submitCar}>{buttonText}</button>      
  </form>;

};

CarForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitCar: PropTypes.func.isRequired,
};
