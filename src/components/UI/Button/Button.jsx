import styles from "./Button.module.scss";
import React from "react" 
const Button = ({ type, children, onClick }) => {
  return (
    <button className={styles.button} type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
