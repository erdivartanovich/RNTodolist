export interface Task {
  id: string;
  task: string;
  done: boolean;
}

export interface Todo {
  id: string;
  description: string;
  tasks: Task[];
}

export type TodoList = Todo[];

export interface TodoState {
  status: "idle" | "loading" | "success" | "failed";
  error: boolean | string;
  todoList: TodoList;
  selectedTodo: Todo | undefined;
}

export const initialState: TodoState = {
  status: "idle",
  error: false,
  todoList: [],
  selectedTodo: undefined,
};
