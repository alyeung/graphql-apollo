export const typeDefs = `
  type Query {
      message: String,
      someNumber: Int
      customer: Person
      widgets: [Widget]
      cars: [Car]
      widget(widgetId: Int!): Widget
  }

  type Mutation{
    appendWidget(widget: AppendWidget!):Widget
    appendCar(car: AppendCar!):Car
  }

  input AppendWidget {
    id: Int
    name: String
    description: String
    quantity: Int
    color: String
    price: Float
  }

  type Widget {
    id: Int
    name: String
    description: String
    quantity: Int
    color: String
    price: Float
  }

  type Person {
    firstName: String
    lastName: String
    age: Int
    height: Float
  }

  type Car{
    id: Int
    make: String
    model: String
    year: Int
    color: String
    price: Int
  }

  input AppendCar {
    id: Int
    make: String
    model: String
    year: Int
    color: String
    price: Int
  }

`;