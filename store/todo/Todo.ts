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
