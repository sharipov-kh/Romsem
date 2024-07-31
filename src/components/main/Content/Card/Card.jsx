import React, { useState } from "react";
import styles from "./Card.module.scss";
import ButtonAddToCart from "../../../UI/Button/ButtonAddToCart";
import { Link } from "react-router-dom";
import PizzaSize from "./pizzaSize/pizzaSize";
import ContentLoader from "react-content-loader";
import { usePizzaSize } from "../../../../hooks/usePizzaSize";

const Card = ({
  image,
  name,
  sizes,
  price,
  path,
  ingredients,
  categories,
  count,
  weight,
  id,
  item,
}) => {
  const { onBtnclick, activeIndex } = usePizzaSize();
  const [pizzaSize, setPizzaSize] = useState(item);

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.Card}>
      <Link to={`/${path}/product/${id}`}>
        <div className={styles.Card__img}>
          {isLoading && (
            <ContentLoader
              key={Math.random()}
              speed={2}
              width={262.66}
              height={262.66}
              viewBox="0 0 262.66 262.66"
              backgroundColor="#e8e8e8"
              foregroundColor="#d6d6d6"
            >
              <rect x="0" y="0" rx="0" ry="0" width="262" height="262" />
            </ContentLoader>
          )}
          <img
            src={image}
            alt={name}
            style={{ display: isLoading ? "none" : "block" }}
            onLoad={handleImageLoad}
          />
        </div>
      </Link>
      <div className={styles.Card__info}>
        <div className={styles.Card__name}>
          <p>{name}</p>
        </div>
        {path === "pizza" ? (
          <PizzaSize
            sizes={sizes}
            activeIndex={activeIndex}
            onBtnclick={onBtnclick}
            pizzaSize={pizzaSize}
            setPizzaSize={setPizzaSize}
          />
        ) : path === "drinks" ? (
          <div className={styles.categories}>
            <p>{categories}</p>
          </div>
        ) : path === "sets" ? (
          <p className={styles.count}>
            {weight} грамм, {count} кусочков
          </p>
        ) : path === "promotion" ? (
          item.items.map((item, idx) => (
            <ul  className={styles.description}>
              <li key={idx}>
                {item}
              </li>
            </ul>
          ))
        ) : (
          <div className={styles.ingredients}>
            {ingredients.filter((_, idx) => idx < 3).join(", ")}
          </div>
        )}

        <div className={styles.Card__action}>
          <div className={styles["Card__action-price"]}>
            <p>
              {path === "pizza" && activeIndex === 26
                ? item.price
                : path === "pizza" && activeIndex === 30
                ? item.priceMiddle
                : path === "pizza" && activeIndex === 40
                ? item.priceLarge
                : price}
              Сом
            </p>
          </div>
          <div className={styles["Card__action-button"]}>
            <ButtonAddToCart item={path === "pizza" ? pizzaSize : item}>
              Хочу!
            </ButtonAddToCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
