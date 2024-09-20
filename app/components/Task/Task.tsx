import React from "react";

import styles from "./Task.module.scss";

import { FiTrash } from "react-icons/fi";

import { IHandles } from "@/app/shared/interfaces";

const Task: React.FC<IHandles> = ({
  removeTask,
  toggleTaskCompletion,
  task,
}: IHandles) => {
  return (
    <li key={task!.id} className={styles.taskItem}>
      <label>
        <input
          type="checkbox"
          checked={task!.completed}
          onChange={() => toggleTaskCompletion(task!.id)}
        />
        <span className={task!.completed ? styles.completed : ""}>
          {task!.title}
        </span>
      </label>
      <button
        className={styles.deleteButton}
        onClick={() => removeTask(task!.id)}
        aria-label={`Remover ${task!.title}`}
      >
        <FiTrash color="#B0BBD1" size={22} />
      </button>
    </li>
  );
};

export default Task;
