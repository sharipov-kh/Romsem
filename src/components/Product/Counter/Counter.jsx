import styles from "./Counter.module.scss";
import { AppContext } from "../../../store/AppContext";
import { useContext } from "react";
const Counter = () => {
  const { count, onClickMinus, onClickPlus } = useContext(AppContext);

  return (
    <div className={styles.counter__box}>
      <div className={styles.counter__minus}>
        <button
          className={count === 1 ? styles.disable : ""}
          onClick={onClickMinus}
        >
          -
        </button>
      </div>
      <div className={styles.counter__content}>{count}</div>
      <div className={styles.counter__plus}>
        <button onClick={onClickPlus}>+</button>
      </div>
    </div>
  );
};

export default Counter;
