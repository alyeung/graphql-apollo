import React from 'react';
import PropTypes from 'prop-types';

export const WidgetViewRow = ({ widget, onDeleteWidget, onEditWidget }) => {

  return <tr>
    <td>{widget.id}</td>
    <td>{widget.name}</td>
    <td>{widget.description}</td>
    <td>{widget.quantity}</td>
    <td>{widget.color}</td>
    <td>{widget.price}</td>
    <td>
      <button type="button" onClick={() => onEditWidget(widget.id)}>Edit</button>
      <button type="button" onClick={() => onDeleteWidget(widget.id)}>Delete</button>
    </td>
  </tr>;
};

WidgetViewRow.propTypes = {
  widget: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }),
  onEditWidget: PropTypes.func.isRequired,
  onDeleteWidget: PropTypes.func.isRequired,
};