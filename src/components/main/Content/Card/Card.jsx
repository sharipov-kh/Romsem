import { useState } from "react";

import styles from "./Card.module.scss";
import Button from "../../../UI/Button/Button";

const Card = ({ image, name, sizes, price, path, ingredients, categories }) => {
  const [activeIndex, setActiveIndex] = useState(26);

  const onBtnclick = (size) => {
    setActiveIndex(size);
  };
  return (
    <div className={styles.Card}>
      <div className={styles.Card__img}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.Card__info}>
        <div className={styles.Card__name}>
          <p>{name}</p>
        </div>
        {path === "pizza" ? (
          <div className={styles.Card__sizes}>
            <ul>
              {sizes.map((size, index) => (
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
        ) : path === "drinks" ? (
          <div className={styles.categories}>
            <p>{categories}</p>
          </div>
        ) : (
          <div className={styles.ingredients}>
            {ingredients.filter((item, idx) => idx < 3).join(", ")}
          </div>
        )}
        <div className={styles.Card__action}>
          <div className={styles["Card__action-price"]}>
            <p>{price} Сом</p>
          </div>
          <div className={styles["Card__action-button"]}>
            <Button>Хочу!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
