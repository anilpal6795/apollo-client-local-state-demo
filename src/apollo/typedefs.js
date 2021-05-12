import { gql } from '@apollo/client'

export default gql`
    extend type Query {
        getTodos: [Todo!]
    }

    extend type Todo {
        id: ID!
        text: String!
        createdTimestamp: String!
        completed: Boolean!
    }
`;