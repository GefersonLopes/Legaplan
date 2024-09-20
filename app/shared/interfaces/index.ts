export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

export interface IHandles {
  toggleTaskCompletion: (id: number) => void;
  removeTask: (id: number) => void;
  task: ITask;
}