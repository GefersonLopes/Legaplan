import React, { useState } from "react";

import styles from "./TaskList.module.scss";

import Button from "../Button/Button";
import Task from "../Task/Task";

import initialTasks from "@/app/db/database";
import { ITask } from "@/app/shared/interfaces";
import taskListCommon from "@/app/shared/common/TasList.common";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);

  const taskCompleted = tasks.filter((task) => task.completed);
  const taskNotCompleted = tasks.filter((task) => !task.completed);

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const defaultPropsTask = {
    removeTask,
    toggleTaskCompletion,
  };

  return (
    <section className={styles.taskGroup}>
      <main className={styles.taskContainer}>
        <h3 className={styles.h3}>{taskListCommon.inProgress}</h3>
        <ul className={styles.taskList}>
          {taskNotCompleted.map((task) => (
            <Task key={task.id} task={task} {...defaultPropsTask} />
          ))}
        </ul>

        <h3 className={styles.h3}>{taskListCommon.finished}</h3>
        <ul className={styles.taskList}>
          {taskCompleted.map((task) => (
            <Task key={task.id} task={task} {...defaultPropsTask} />
          ))}
        </ul>
      </main>
      <Button className="primary size-lg">{taskListCommon.addTask}</Button>
    </section>
  );
};

export default TaskList;
