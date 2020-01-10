import { createContext } from 'react';

export const initialState = {
  taskList: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        taskList: [...state.taskList, action.payload],
      };
    case 'FINISH_TASK':
      return {
        taskList: state.taskList.map((task, index) => {
          return index === action.payload.index
            ? { ...task, done: true }
            : task;
        }),
      };
    case 'CLEAR_TASK_LIST':
      return {
        taskList: state.taskList.filter(task => !task.done),
      };
    default:
      return state;
  }
}

export default createContext(initialState);
