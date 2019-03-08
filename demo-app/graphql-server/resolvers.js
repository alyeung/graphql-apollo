// fetch API from web browser using node-fetch
import fetch from 'node-fetch';


export const resolvers = {
  Query: {
    message:() => 'Hello World!',
    someNumber: () => '42',
    customer: () => ({
      firstName: 'Sally',
      lastName: 'Thomas',
      age: 34,
      height: 63.5,
    }),
    //widget: (_1, _2, context) =>{
      widgets: async(_1, _2, context) =>{

      // promise (async operation) in response rs from server
      //return fetch(`${context.restURL}/widgets/1`)
      const res = await fetch(`${context.restURL}/widgets`)
      
      // rs converted to json!
      //.then(res => res.json());

      // promises and generators
      // not blocking javascript thread
      return await res.json();
    },
      cars: async(_1, _2, context) => {
        const res = await fetch(`${context.restURL}/cars`)
        return await res.json();
      }
  },
};