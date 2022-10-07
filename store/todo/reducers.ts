import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  getTodo,
  getTodoList,
  saveTodo,
  setError,
  setSuccess,
} from "./actions";
import { TodoList, Todo } from "./Todo";

export interface TodoState {
  loading: boolean;
  error: boolean | string;
  success: boolean | string;
  todoList: TodoList;
  todo: Todo | null;
}

export const initialState: TodoState = {
  loading: false,
  error: false,
  success: false,
  todoList: {
    todos: {},
    allTodos: [],
  },
  todo: null,
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<TodoState>): void => {
    builder.addCase(setError, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(setSuccess, (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    });

    builder.addCase(getTodoList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todoList = payload;
      state.success = true;
    });

    builder.addCase(getTodo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todo = payload;
      state.success = true;
    });

    builder.addCase(saveTodo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todo = payload;
      state.todoList.todos[payload.id] = payload;
      state.todoList.allTodos.push(payload.id);
      state.success = true;
    });
  },
});

export default todoReducer.reducer;
