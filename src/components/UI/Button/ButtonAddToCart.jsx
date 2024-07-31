import { useContext } from "react";
import { AppContext } from "../../../store/AppContext";
import styles from "./Button.module.scss";

const ButtonAddToCart = ({ item, type, children }) => {
  const { addToCart } = useContext(AppContext);
  return (
    <button
      className={styles.button}
      onClick={() => addToCart(item)}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default ButtonAddToCart;
