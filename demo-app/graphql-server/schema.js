export const typeDefs = `
  type Query {
      message: String,
      someNumber: Int
      customer: Person
      widgets: [Widget]
      cars: [Car]
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
`;