import styles from "./Card.module.scss";
import Button from "../../../UI/Button/Button";
import { Link } from "react-router-dom";
import PizzaSize from "./pizzaSize/pizzaSize";

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
}) => {

  return (
    <div className={styles.Card}>
      <Link to={`/${path}/product/${id}`}>
        <div className={styles.Card__img}>
          <img src={image} alt={name} />
        </div>
      </Link>
      <div className={styles.Card__info}>
        <div className={styles.Card__name}>
          <p>{name}</p>
        </div>
        {path === "pizza" ? (
          <PizzaSize sizes={sizes}/>
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
