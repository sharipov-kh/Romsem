import React, { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = ({ price }) => {
  const [count, setCount] = useState(0);

  const onClickPlusHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const onClickMinusHandler = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className={styles.info__counter}>
      <div className={styles.counter__price}>
        <p>{price} Сом</p>
      </div>
      <div className={styles.counter__box}>
        <div className={styles.counter__minus}>
          <button
            className={count === 0 ? styles.disable : ""}
            onClick={onClickMinusHandler}
          >
            -
          </button>
        </div>
        <div className={styles.counter__content}>{count}</div>
        <div className={styles.counter__plus}>
          <button onClick={onClickPlusHandler}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
