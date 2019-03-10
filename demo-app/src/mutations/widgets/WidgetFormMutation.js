import React from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

import {WidgetForm} from '../../components/widgets/WidgetForm';

// direct cache update

const widgetsQuery = gql`
    query Widgets{
        widgets{
        id
        name
        description
        quantity
        color
        price
        }
    }
`;
// copy query over from GraphQL Queries, to ensure we know it works first.

const appendWidgetMutation = gql`
    mutation AppendWidget($widget:AppendWidget!){
        appendWidget(widget: $widget){
        id
        name
        description
        quantity
        color
        price
        }
    }
`;

export const WidgetFormMutation = () => {
    return <Mutation mutation={appendWidgetMutation}>
        {mutate =>{
            const appendWidget = widget =>{
                mutate({
                    mutation: appendWidgetMutation,
                    variables: { widget },
                    //optimistic update
                    optimisticResponse: {
                        appendWidget: {
                            id: -1,
                            ...widget, // object spread operator
                            __typename: 'Widget'
                        },
                    },
                    // destructure, alias, (review this JS syntax:)
                    update: (store, { data: {appendWidget: widget}}) =>{
                        // local cache update
                        // will run twice: once for optimistic, and one for the real save
                        let data = store.readQuery({query: widgetsQuery}); // read cache for apollo client
                        data.widgets.push(widget);
                        store.writeQuery({query: widgetsQuery, data});
                    },
                });
            };
            return <WidgetForm buttonTst="Add Widget" onSubmitWidget={appendWidget} />;

        }}
    </Mutation>;
}