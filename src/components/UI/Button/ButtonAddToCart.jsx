import { useContext } from "react";
import { AppContext } from "../../../store/AppContext";

import styles from "./Button.module.scss";

const ButtonAddToCart = (props) => {
  const { addToCart } = useContext(AppContext);
  return (
    <button
      className={styles.button}
      onClick={() => addToCart(props.item)}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default ButtonAddToCart;
