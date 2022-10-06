export interface Task {
  id: string;
  task: string;
  done: boolean;
}

export interface Todos {
  tasks: {
    [id: string]: Task;
  };
  allTasks: string[];
}

export type TodosList = Todos[];
