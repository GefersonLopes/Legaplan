"use client";

import Modal from "./components/Modal/Modal";
import TaskList from "./components/TaskList/TaskList";

export default function Home() {
  return (
    <>
      <TaskList />
      <Modal />
    </>
  );
}
