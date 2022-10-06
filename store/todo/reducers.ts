import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { getTodo, getTodoList, setError, setSuccess } from "./actions";
import { TodoList, Todo } from "./Todo";

export interface TodoState {
  loading: boolean;
  error: boolean | string;
  success: boolean | string;
  todoList: TodoList | [];
  todo: Todo | null;
}

export const initialState: TodoState = {
  loading: false,
  error: false,
  success: false,
  todoList: [],
  todo: null,
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<TodoState>): void => {
    builder.addCase(setError, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(setSuccess, (state, { payload }) => {
      state.success = payload;
    });

    builder.addCase(getTodoList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todoList = payload;
    });

    builder.addCase(getTodo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todo = payload;
    });
  },
});

export default todoReducer.reducer;
