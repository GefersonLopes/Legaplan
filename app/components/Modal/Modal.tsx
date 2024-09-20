import React from "react";

import styles from "./Modal.module.scss";

import modalsCommon from "@/app/shared/common/Modals.common";
import Button from "../Button/Button";
import { useModalStore } from "@/app/store/task";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "@/app/middlewares/index";
import { TaskFormData } from "@/app/shared/interfaces";

const Modal: React.FC = () => {
  const { showModal, type, closeModal, confirmAction } = useModalStore();
  const isAdd = type === "add";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormData>({
    resolver: isAdd ? yupResolver(schema) : undefined,
  });

  const onSubmit: SubmitHandler<{ taskTitle: string }> = (data: {
    taskTitle: string;
  }) => {
    confirmAction(data);
    reset();
  };

  if (!showModal) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{isAdd ? modalsCommon.titleCreate : modalsCommon.titleDelete}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {isAdd ? (
            <div className={styles.inputGroup}>
              <label htmlFor="taskTitle">{modalsCommon.label}</label>
              <input
                type="text"
                id="taskTitle"
                placeholder={modalsCommon.placeholder}
                {...register("taskTitle")}
                aria-label={modalsCommon.label}
                aria-invalid={errors?.taskTitle ? "true" : "false"}
                aria-required
                aria-describedby="taskTitleError"
              />
              <p className={styles.errorMessage} role="alert">
                {errors?.taskTitle?.message}
              </p>
            </div>
          ) : (
            <p className={styles.description}>
              {modalsCommon.descriptionDelete}
            </p>
          )}
          <div className={styles.buttonGroup}>
            <Button className="secondary size-md" onClick={closeModal}>
              {modalsCommon.cancel}
            </Button>
            <Button
              type="submit"
              className={`${isAdd ? "primary" : "danger"} size-md`}
            >
              {isAdd ? modalsCommon.confirm : modalsCommon.delete}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
