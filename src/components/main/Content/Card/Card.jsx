import { useState } from "react";
import styles from "./Card.module.scss";
import ButtonAddToCart from "../../../UI/Button/ButtonAddToCart";
import { Link } from "react-router-dom";
import PizzaSize from "./pizzaSize/pizzaSize";
import ContentLoader from "react-content-loader";

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
  const initialSize = sizes?.includes(30) ? 30 : sizes?.includes(26) ? 26 : 40;
  const [activeIndex, setActiveIndex] = useState(initialSize);
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
            setActiveIndex={setActiveIndex}
          />
        ) : path === "drinks" ? (
          <div className={styles.categories}>
            <p>{categories}</p>
          </div>
        ) : path === "sets" ? (
          <p className={styles.count}>
            {weight} грамм, {count} кусочков
          </p>
        ) : (
          <div className={styles.ingredients}>
            {ingredients.filter((_, idx) => idx < 3).join(", ")}
          </div>
        )}
        <div className={styles.Card__action}>
          <div className={styles["Card__action-price"]}>
            {path === "pizza" ? (
              <p>
                {activeIndex === 26
                  ? price[0]
                  : activeIndex === 30
                  ? price[1]
                  : activeIndex === 40
                  ? price[2]
                  : price}
                Сом
              </p>
            ) : (
              <p>{price} Сом</p>
            )}
          </div>
          <div className={styles["Card__action-button"]}>
            <ButtonAddToCart item={item}>Хочу!</ButtonAddToCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
