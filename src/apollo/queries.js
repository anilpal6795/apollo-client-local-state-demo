import { gql } from '@apollo/client';

/**
 * QUERIES
 */

export const GET_TODOS = gql`
    query GetTodos($completed: Boolean) {
        getTodos @client {
            id,
            text,
            createdTimestamp,
            completed
        }
    }
`;

export const TODO_FRAGMENT = gql`
    fragment MyTodo on Todo {
        id,
        text,
        createdTimestamp,
        completed
    }
`
