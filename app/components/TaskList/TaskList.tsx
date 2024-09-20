import React from "react";

import styles from "./TaskList.module.scss";

import Button from "../Button/Button";
import Task from "../Task/Task";

import taskListCommon from "@/app/shared/common/TasList.common";

import { useModalStore } from "@/app/store/task";

const TaskList: React.FC = () => {
  const { tasks, openModal, removeTask, toggleTaskCompletion } =
    useModalStore();

  const taskCompleted = tasks.filter((task) => task.completed);
  const taskNotCompleted = tasks.filter((task) => !task.completed);

  const handleAddTask = () => openModal("add");

  const defaultPropsTask = {
    removeTask,
    toggleTaskCompletion,
  };

  const renderWithoutTasks = () => (
    <p className={styles.noTasks}>{taskListCommon.noTasks}</p>
  );

  return (
    <section className={styles.taskGroup}>
      <main className={styles.taskContainer}>
        <h3 className={styles.h3}>{taskListCommon.inProgress}</h3>
        <ul className={styles.taskList}>
          {taskNotCompleted.map((task) => (
            <Task key={task.id} task={task} {...defaultPropsTask} />
          ))}
          {taskNotCompleted.length === 0 && renderWithoutTasks()}
        </ul>

        <h3 className={styles.h3}>{taskListCommon.finished}</h3>
        <ul className={styles.taskList}>
          {taskCompleted.map((task) => (
            <Task key={task.id} task={task} {...defaultPropsTask} />
          ))}
          {taskCompleted.length === 0 && renderWithoutTasks()}
        </ul>
      </main>
      <Button className="primary size-lg" onClick={handleAddTask}>
        {taskListCommon.addTask}
      </Button>
    </section>
  );
};

export default TaskList;
