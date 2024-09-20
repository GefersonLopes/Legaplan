import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  const classes = className?.split(" ").map((cls) => styles[cls]);
  return (
    <button
      className={`${styles.button} ${classes && classes.join(" ")}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
