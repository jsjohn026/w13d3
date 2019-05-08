import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  
  let currentState = {};

  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach( (todo) => { 
        currentState[todo.id] = todo; 
      });
      return currentState;
    case RECEIVE_TODO:
      const newTodo = { [action.todo.id]: action.todo };
      return Object.assign({}, state, newTodo);
    default:
      return state;
  }
};


export default todosReducer;

// const newTodos = [
//   {
//     id: 3,
//     title: 'get almond milk',
//     body: 'on sale',
//     done: false
//    },
//   {
//     id: 4,
//     title: 'learn to code',
//     body: 'quickly',
//     done: true
//    },
// ]
// store.getState(); // should return default state object
// store.dispatch(receiveTodo({ id: 3, title: 'New Todo' }));
// store.getState(); // should include the newly added todo
// store.dispatch(receiveTodos(newTodos));
// store.getState(); 