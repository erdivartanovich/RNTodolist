import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { getTodo, getTodoList, saveTodoList } from "./actions";
import { Todo, TodoState, initialState } from "./Todo";

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    ADD_TODO: (state, action: PayloadAction<Todo>) => {
      const { payload: todo } = action;
      state.selectedTodo = todo;
      state.todoList.todos[todo.id] = todo;
      state.todoList.allTodos.push(todo.id);
    },
    SELECT_TODO: (state, { payload: id }: PayloadAction<string>) => {
      const todo = state.todoList.todos[id];
      state.selectedTodo = todo;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<TodoState>): void => {
    builder.addCase(getTodoList.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.todoList = payload;
    });

    builder.addCase(getTodo.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.selectedTodo = payload;
    });

    builder.addCase(saveTodoList.fulfilled, (state) => {
      state.status = "success";
    });
  },
});

export default todoReducer.reducer;
