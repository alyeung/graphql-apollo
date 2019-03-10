import React from 'react'; //react api import
import {Query} from 'react-apollo';  //Query component that knows how to talk to GraphQL, get data, and make available to react component tree
import gql from 'graphql-tag';
import {CarTool} from '../../components/cars/CarTool';

// copy from graphQL to make sure the query is working first
// wrap in gql for it to work
const carsQuery = gql`
    query GetCars{
        cars{
        id
        make
        year
        model
        color
        price 
        }
    }
`;

export const CarToolQuery = () => {
    // jsx, alternative syntax for function calls
    return <Query query={carsQuery}>
    
    {( {loading, error, data}) => {
        if(loading) return 'Loading';
        if(error) return 'Error';

        console.log(data.cars);
        return <CarTool cars={data.cars}/>;
    }}
    </Query>;

    // transpiled
    //return React.createElement(Query, {query: widgetsQuery});


}