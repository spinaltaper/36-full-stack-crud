import superagent from 'superagent';

const todosFetch = todos => ({
    type: 'TODOS_FETCH',
    payload: todos,
});

const todoCreate = todo => ({
    type: 'TODO_CREATE',
    payload: todos,
})

const todoUpdate = todo => ({
    type: 'TODO_UPDATE',
    payload: todo,
});

