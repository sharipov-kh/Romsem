import styles from "./ProductContainer.module.scss";
import ButtonAddToCart from "../UI/Button/ButtonAddToCart";
import Counter from "./Counter/Counter";
import PizzaSize from "../main/Content/Card/pizzaSize/pizzaSize";
import { usePizzaSize } from "../../hooks/usePizzaSize";
import { useState, useEffect } from "react";

const ProductContainer = ({ item }) => {
  const [pizzaSize, setPizzaSize] = useState(() => ({
    ...item,
    size: item?.sizes?.[1] || null,
  }));

  const { onBtnclick, activeIndex } = usePizzaSize();

  useEffect(() => {
    setPizzaSize({ ...item, size: item?.sizes?.[1] || null });
  }, [item]);

  return (
    <div className={styles.Product__content}>
      <div className={styles.content__image}>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className={styles.content__info}>
        <div className={styles.info__name}>
          <h2>{item.name}</h2>
        </div>

        <div className={styles.info__counter}>
          <div className={styles.counter__price}>
            <p>
              {item.path === "pizza"
                ? activeIndex === 26
                  ? item.price
                  : activeIndex === 30
                  ? item.priceMiddle
                  : activeIndex === 40
                  ? item.priceLarge
                  : item.price
                : item.price}
              Сом
            </p>
          </div>

          <Counter />
        </div>

        <div className={styles.info__description}>
          {item.path === "pizza" ? (
            <div className={styles.PizzaSize}>
              <PizzaSize
                sizes={item.sizes}
                activeIndex={activeIndex}
                onBtnclick={(size) => {
                  onBtnclick(size);
                  setPizzaSize({ ...pizzaSize, size });
                }}
                pizzaSize={pizzaSize}
              />
            </div>
          ) : item.path === "sets" ? (
            <div className={styles.description__weight}>
              <p>
                {item.weight} грамм, {item.count} кусочков
              </p>
            </div>
          ) : item.path === "drinks" ? (
            <div className={styles.description__category}>
              <p>{item.categories}</p>
            </div>
          ) : (
            item.path !== "sets" &&
            item.path !== "drinks" && (
              <>
                <p className={styles.description__title}>Состав:</p>
                <div className={styles.description__ingredients}>
                  {item.ingredients?.map((ingredient, index) => (
                    <p key={index}>
                      {ingredient}
                      {index < item.ingredients.length - 1 ? "," : ""}
                    </p>
                  ))}
                </div>
              </>
            )
          )}
        </div>
        <div className={styles.info__button}>
          <ButtonAddToCart item={item.path === "pizza" ? pizzaSize : item}>
            Хочу!
          </ButtonAddToCart>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
