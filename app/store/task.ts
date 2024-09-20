import { create } from "zustand";
import { ITask, ModalState } from "../shared/interfaces";
import initialTasks from "../db/database";

export const useModalStore = create<ModalState>((set, get) => ({
  showModal: false,
  type: "add",
  tasks: initialTasks,
  idTask: 0,

  openModal: (modalType: "add" | "delete") =>
    set({
      showModal: true,
      type: modalType,
    }),

  closeModal: () => set({ showModal: false }),

  confirmAction: (task: { taskTitle: string }) => {
    const { type, addTask, tasks, idTask } = get();

    if (type === "add") {
      const newTask = addTask(task);
      set({ tasks: [...tasks, newTask] });
    } else if (type === "delete") {
      set({ tasks: tasks.filter((task) => task.id !== idTask) });
    }

    set({ showModal: false });
  },

  addTask: (task: { taskTitle: string }): ITask => {
    const tasks = get().tasks;
    const lastId =
      tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) : 0;

    const newTask: ITask = {
      id: lastId + 1,
      title: task.taskTitle,
      completed: false,
    };

    return newTask;
  },

  removeTask: (id: number) => {
    set({
      idTask: id,
      showModal: true,
      type: "delete",
    });
  },

  toggleTaskCompletion: (id: number) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
}));
