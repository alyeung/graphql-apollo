import React, { useState } from 'react';
import PropTypes from 'prop-types';

const initialWidgetForm = () => ({
  name: '',
  description: '',
  quantity: 1900,
  color: '',
  price: 0,
});

export const WidgetForm = ({ buttonText, onSubmitWidget }) => {

  const [ widgetForm, setWidgetForm ] = useState(initialWidgetForm());

  const submitWidget = () => {
    onSubmitWidget({ ...widgetForm });
    setWidgetForm(initialWidgetForm());
  };

  return <form>
    <div>
      <label htmlFor="name-input">Name:</label>
      <input type="text" id="name-input" value={widgetForm.name}
        onChange={e => setWidgetForm({ ...widgetForm, name: e.target.value })} />
    </div>
    <div>
      <label htmlFor="description-input">Description:</label>
      <input type="text" id="description-input" value={widgetForm.description}
        onChange={e => setWidgetForm({ ...widgetForm, description: e.target.value })} />
    </div>
    <div>
      <label htmlFor="quantity-input">Quantity:</label>
      <input type="number" id="quantity-input" value={widgetForm.quantity}
        onChange={e => setWidgetForm({ ...widgetForm, quantity: Number(e.target.value) })} />
    </div>
    <div>
      <label htmlFor="color-input">Color:</label>
      <input type="text" id="color-input" value={widgetForm.color}
        onChange={e => setWidgetForm({ ...widgetForm, color: e.target.value })} />
    </div>
    <div>
      <label htmlFor="price-input">Price:</label>
      <input type="number" id="price-input" value={widgetForm.price}
        onChange={e => setWidgetForm({ ...widgetForm, price: Number(e.target.value) })} />
    </div>
    <button type="button" onClick={submitWidget}>{buttonText}</button>      
  </form>;

};

WidgetForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitWidget: PropTypes.func.isRequired,
};
