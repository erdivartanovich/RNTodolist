import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTodoList as storageGetTodoList,
  getTodo as storageGetTodo,
  saveTodo as storageSaveTodo,
} from "../../storage/todo";
import { TodoList, Todo } from "./Todo";

const SET_ERROR = "todo/SET_ERROR";
const SET_SUCCESS = "todo/SET_SUCCESS";
const GET_TODO_LIST = "todo/GET_TODO_LIST";
const GET_TODO = "todo/GET_TODO";
const SAVE_TODO = "todo/SAVE_TODO";

export const setError = createAction<string | boolean>(SET_ERROR);
export const setSuccess = createAction<string | boolean>(SET_SUCCESS);

export const getTodoList = createAsyncThunk<TodoList>(
  GET_TODO_LIST,
  async () => {
    return storageGetTodoList();
  }
);

export const getTodo = createAsyncThunk<Todo, string>(
  GET_TODO,
  async (id: string) => {
    return storageGetTodo(id);
  }
);

export const saveTodo = createAsyncThunk<Todo, Todo>(
  SAVE_TODO,
  async (data) => {
    return storageSaveTodo(data);
  }
);