import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import modalsCommon from "@/app/shared/common/Modals.common";

interface ModalProps {
  onClose: () => void;
  onConfirm: () => void;
  type?: "add" | "delete";
}

const Modal: React.FC<ModalProps> = ({ onClose, onConfirm, type }) => {
  const isAdd = type === "add";

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{isAdd ? modalsCommon.titleCreate : modalsCommon.titleDelete}</h2>
        <form>
          {isAdd ? (
            <div className={styles.inputGroup}>
              <label htmlFor="taskTitle">{modalsCommon.label}</label>
              <input
                type="text"
                id="taskTitle"
                placeholder={modalsCommon.placeholder}
              />
            </div>
          ) : (
            <p className={styles.description}>
              {modalsCommon.descriptionDelete}
            </p>
          )}
          <div className={styles.buttonGroup}>
            <Button className="secondary size-md" onClick={onClose}>
              {modalsCommon.cancel}
            </Button>
            <Button
              className={`${isAdd ? "primary" : "danger"} size-md`}
              onClick={onConfirm}
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
