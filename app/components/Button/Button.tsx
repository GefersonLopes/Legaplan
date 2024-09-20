import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, type }) => {
  const classes = className?.split(" ").map((cls) => styles[cls]);
  return (
    <button
      className={`${styles.button} ${classes && classes.join(" ")}`}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
