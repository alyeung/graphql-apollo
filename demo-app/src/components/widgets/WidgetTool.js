import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from '../shared/ToolHeader';
import { WidgetTable } from './WidgetTable';
//import { WidgetForm } from './WidgetForm';
import { WidgetFormMutation} from '../../mutations/widgets/WidgetFormMutation';

export const WidgetTool = ({ widgets: initialWidgets }) => {

  const [ widgets, setWidgets ] = useState(initialWidgets);
  const [ editWidgetId, setEditWidgetId ] = useState(-1);

  const editWidget = widgetId => {
    setEditWidgetId(widgetId);
  };

  // const addWidget = widget => {
  //   setWidgets(widgets.concat({
  //     ...widget,
  //     id: Math.max(...widgets.map(c => c.id), 0) + 1,
  //   }));
  //   setEditWidgetId(-1);
  // };

  const deleteWidget = widgetId => {
    setWidgets(widgets.filter(widget => widget.id !== widgetId));
    setEditWidgetId(-1);
  };

  const saveWidget = widget => {
    const newWidgets = widgets.concat();
    const widgetIndex = newWidgets.findIndex(c => c.id === widget.id);
    newWidgets[widgetIndex] = widget;
    setWidgets(newWidgets);
    setEditWidgetId(-1);
  };

  const cancelWidget = () => setEditWidgetId(-1);

  const widgetTableProps = {
    widgets,
    editWidgetId,
    onEditWidget: editWidget,
    onDeleteWidget: deleteWidget,
    onSaveWidget: saveWidget,
    onCancelWidget: cancelWidget,
  };

  return <>
    <ToolHeader headerText="Widget Tool" />
    <WidgetTable {...widgetTableProps} />
    <WidgetFormMutation />
  </>;

};

WidgetTool.propTypes= {
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
};