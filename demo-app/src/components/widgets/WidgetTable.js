import React from 'react';
import PropTypes from 'prop-types';

import { WidgetEditRow } from './WidgetEditRow';
import { WidgetViewRow } from './WidgetViewRow';

export const WidgetTable = ({
  widgets, editWidgetId, onEditWidget,
  onDeleteWidget, onSaveWidget, onCancelWidget,
}) => 
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Color</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {widgets.map(widget => (widget.id === editWidgetId)
        ? <WidgetEditRow key={widget.id} widget={widget} onSaveWidget={onSaveWidget} onCancelWidget={onCancelWidget} />
        : <WidgetViewRow key={widget.id} widget={widget} onDeleteWidget={onDeleteWidget} onEditWidget={onEditWidget} /> )}
    </tbody>
  </table>;

WidgetTable.propTypes = {
  widgets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.number.iRequired
    }),
  ).isRequired,
  editWidgetId: PropTypes.number,
  onEditWidget: PropTypes.func.isRequired,
  onDeleteWidget: PropTypes.func.isRequired,
  onSaveWidget: PropTypes.func,
  onCancelWidget: PropTypes.func,
};
