import { useState } from 'react';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_TODOS } from './queries';
import { todosReactiveVar } from './cache';

export const useTodoActions = () => {
    const client = useApolloClient();
    const [todo, setTodo] = useState('');
    const [todoCount, setTodoCount] = useState(0);

    const { data } = useQuery(GET_TODOS);
    const todosData = data?.getTodos;

    const add = () => {
        if(todo){
            const todoItem = {
                __typename: 'Todo',
                id: todoCount,
                text: todo,
                createdTimestamp: Date.now().toString(),
                completed: false
            };
            client.writeQuery({
                query: GET_TODOS,
                data: {
                    getTodos: todosData ? [
                        ...todosData,
                        todoItem
                    ] : [todoItem]
                }
            })
            setTodoCount(todoCount+1);
        }
    }

    const complete = (id) => {
        client.writeQuery({
            query: GET_TODOS,
            data: {
                getTodos: todosData.map((item) => {
                    if(id === item.id){
                        return {
                            ...item,
                            completed: true
                        }
                    }
                        
                    return item;
                })
            }
        })
    }

    const remove = (id) => {
        client.cache.evict({
            id: `Todo:${id}`
        })
        client.cache.gc();
    }

    return {
        todosData,
        add,
        complete,
        remove,
        todo,
        setTodo
    }
}

export const useTodoActionsRV = () => {
    const [todo, setTodo] = useState('');
    const [todoCount, setTodoCount] = useState(0);

    const { data } = useQuery(GET_TODOS);
    const todosData = data?.getTodos;

    const add = () => {
        if(todo){
            todosReactiveVar([
                ...todosReactiveVar(),
                {
                    __typename: 'Todo',
                    id: todoCount,
                    text: todo,
                    createdTimestamp: Date.now().toString(),
                    completed: false
                }
            ])
            setTodoCount(todoCount+1);
        }
    }

    const remove = (id) => {
        todosReactiveVar(todosReactiveVar().filter(todo => todo.id !== id));
    }

    const complete = (id) => {
        todosReactiveVar(todosReactiveVar().map(todo => {
            if(todo.id === id)
                return {
                    ...todo,
                    completed: true
                }

            return todo;
        }));
    }

    return {
        todo,
        setTodo,
        todosData,
        add,
        remove,
        complete
    }
}
