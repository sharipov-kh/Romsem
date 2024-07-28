import { useContext } from "react";
import styles from "./Counter.module.scss";
import { AppContext } from "../../../../store/AppContext";

const Counter = ({ item }) => {
  const { onClickPlusHandler, onClickMinusHandler } = useContext(AppContext);

  return (
    <div className={styles.info__counter}>
      <div className={styles.counter__box}>
        <div className={styles.counter__minus}>
          <button onClick={() => onClickMinusHandler(item)}>-</button>
        </div>
        <div className={styles.counter__content}> {item.count}</div>
        <div className={styles.counter__plus}>
          <button onClick={() => onClickPlusHandler(item)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
