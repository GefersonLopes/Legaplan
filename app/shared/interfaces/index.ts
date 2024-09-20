export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

export interface IHandles {
  toggleTaskCompletion: (id: number) => void;
  removeTask: (id: number) => void;
  task?: ITask;
}

export interface ModalState extends IHandles {
  openModal: (type: "add" | "delete") => void;
  closeModal: () => void;
  confirmAction: (task: { taskTitle: string }) => void;
  addTask: (task: { taskTitle: string }) => ITask;
  showModal: boolean;
  type: "add" | "delete";
  tasks: ITask[];
  idTask: number;
}

export interface TaskFormData {
  taskTitle: string;
}
