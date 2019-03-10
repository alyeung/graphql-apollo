import React from 'react'; //react api import
import {Query} from 'react-apollo';  //Query component that knows how to talk to GraphQL, get data, and make available to react component tree
import gql from 'graphql-tag';
import {WidgetTool} from '../../components/widgets/WidgetTool';

// copy from graphQL to make sure the query is working first
// wrap in gql for it to work
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

export const WidgetToolQuery = () => {
    // jsx, alternative syntax for function calls
    return <Query query={widgetsQuery}>
    
    {( {loading, error, data}) => {
        if(loading) return 'Loading';
        if(error) return 'Error';

        return <WidgetTool widgets={data.widgets}/>;
    }}
    </Query>;

    // transpiled
    //return React.createElement(Query, {query: widgetsQuery});


}