import styles from "./pizzaSize.module.scss";
import { useState } from "react";

const PizzaSize = ({ sizes }) => {
  const [activeIndex, setActiveIndex] = useState(26);

  const onBtnclick = (size) => {
    setActiveIndex(size);
  };
  return (
    <div className={styles.Card__sizes}>
      <ul>
        {sizes?.map((size, index) => (
          <li
            key={index}
            className={`${activeIndex === size ? styles.active : ""}`}
            onClick={() => onBtnclick(size)}
          >
            <span>{size}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaSize;
