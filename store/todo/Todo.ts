export interface Task {
  id: string;
  task: string;
  done: boolean;
}

export interface Todo {
  id: string;
  description: string;
  tasks: {
    [id: string]: Task;
  };
  allTasks: string[];
}

export type TodoList = {
  todos: {
    [id: string]: Todo;
  };
  allTodos: string[];
};

export interface TodoState {
  status: "idle" | "loading" | "success" | "failed";
  error: boolean | string;
  todoList: TodoList;
  todo: Todo | null;
}

export const initialState: TodoState = {
  status: "idle",
  error: false,
  todoList: {
    todos: {},
    allTodos: [],
  },
  todo: null,
};
