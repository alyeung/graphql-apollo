import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const WidgetEditRow = ({ widget, onSaveWidget, onCancelWidget }) => {

  const [widgetForm, setWidgetForm] = useState({
    name: widget.name,
    description: widget.description,
    quantity: widget.quantity,
    color: widget.color,
    price: widget.price,
  });

  return <tr>
    <td>{widget.id}</td>
    <td><input type="text" id="name-input" value={widgetForm.name}
      onChange={e => setWidgetForm({ ...widgetForm, name: e.target.value })} /></td>
    <td><input type="text" id="description-input" value={widgetForm.description}
      onChange={e => setWidgetForm({ ...widgetForm, description: e.target.value })} /></td>
    <td><input type="number" id="quantity-input" value={widgetForm.quantity}
      onChange={e => setWidgetForm({ ...widgetForm, quantity: Number(e.target.value) })} /></td>
    <td><input type="text" id="color-input" value={widgetForm.color}
      onChange={e => setWidgetForm({ ...widgetForm, color: e.target.value })} /></td>
    <td><input type="number" id="price-input" value={widgetForm.price}
      onChange={e => setWidgetForm({ ...widgetForm, price: Number(e.target.value) })} /></td>
    <td>
      <button type="button" onClick={() => onSaveWidget({ ...widgetForm, id: widget.id })}>Save</button>
      <button type="button" onClick={onCancelWidget}>Cancel</button>
    </td>
  </tr>;
};

WidgetEditRow.propTypes = {
  widget: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }),
  onSaveWidget: PropTypes.func.isRequired,
  onCancelWidget: PropTypes.func.isRequired,
};