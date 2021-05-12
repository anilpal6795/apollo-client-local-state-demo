import { InMemoryCache, makeVar } from '@apollo/client';

// initializing reactive variable for todos
export const todosReactiveVar = makeVar([]);

// cacheOptions for using reactive variables
const cacheOptions = {
    typePolicies: {
        Query: {
            fields: {
                getTodos: {
                    read: () => todosReactiveVar()
                }
            }
        }
    }
}

export default new InMemoryCache();