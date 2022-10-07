import { createAction, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import {
  getTodo as storageGetTodo,
  getTodoList as storageGetTodoList,
  saveTodoList as storageSaveTodoList,
} from "../../storage/todo";
import { Todo, TodoList, initialState } from "./Todo";

const ADD_TODO = "todo/ADD_TODO";
const SELECT_TODO = "todo/SELECT_TODO";
const GET_TODO_LIST = "todo/GET_TODO_LIST";
const GET_TODO = "todo/GET_TODO";
const SAVE_TODO_LIST = "todo/SAVE_TODO_LIST";

export const addTodo = createAction(ADD_TODO, (description: string) => {
  const id = nanoid();
  return {
    payload: <Todo>{
      id,
      description,
      tasks: {},
      allTasks: [],
    },
  };
});

export const selectTodo = createAction<string | null, string>(SELECT_TODO);

export const getTodoList = createAsyncThunk<TodoList>(
  GET_TODO_LIST,
  async () => {
    const todoList = await storageGetTodoList();
    return todoList ?? initialState.todoList;
  }
);

export const getTodo = createAsyncThunk<Todo, string>(
  GET_TODO,
  async (id: string) => {
    return await storageGetTodo(id);
  }
);

export const saveTodoList = createAsyncThunk<TodoList, TodoList>(
  SAVE_TODO_LIST,
  async (todoList: TodoList) => {
    console.log("saving todoList is", todoList);
    return await storageSaveTodoList(todoList);
  }
);
