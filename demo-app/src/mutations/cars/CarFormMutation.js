import React from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

import {CarForm} from '../../components/cars/CarForm';

// direct cache update

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
// copy query over from GraphQL Queries, to ensure we know it works first.

const appendCarMutation = gql`
    mutation AppendCar($car:AppendCar!){
        appendCar(car: $car){
            id
            make
            year
            model
            color
            price 
        }
    }
`;

export const CarFormMutation = () => {
    return <Mutation mutation={appendCarMutation}>
        {mutate =>{
            const appendCar = car =>{
                mutate({
                    mutation: appendCarMutation,
                    variables: { car },
                    //optimistic update
                    optimisticResponse: {
                        appendCar: {
                            id: -1,
                            ...car, // object spread operator
                            __typename: 'Car'
                        },
                    },
                    // destructure, alias, (review this JS syntax:)
                    update: (store, { data: {appendCar: car}}) =>{
                        // local cache update
                        // will run twice: once for optimistic, and one for the real save
                        let data = store.readQuery({query: carsQuery}); // read cache for apollo client
                        data.cars.push(car);
                        store.writeQuery({query: carsQuery, data});
                    },
                });
            };
            return <CarForm buttonText="Add Car" onSubmitCar={appendCar} />;

        }}
    </Mutation>;
}