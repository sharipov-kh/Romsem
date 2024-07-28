import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Product.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import prevBtn from "../../assets/Icon/product/prevBtn.svg";
import ButtonAddToCart from "../UI/Button/ButtonAddToCart";
import Counter from "./Counter/Counter";
import PizzaSize from "../main/Content/Card/pizzaSize/pizzaSize";
import Slider from "./Slider/Slider";

const Product = () => {
  const { pathname } = useLocation();
  const { path, id } = useParams();
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await axios(`http://localhost:8080/${path}/${id}`).then(({ data }) =>
        setProduct(data)
      );
      window.scrollTo(0, 0);
    })();
  }, [id, path, pathname]);

  return (
    <div className={styles.Product}>
      <div className={styles.Product__navigation}>
        <Link>
          <button onClick={() => navigate(-1)}>
            <img src={prevBtn} alt="prevBtn" /> Назад
          </button>
        </Link>
      </div>
      <div className={styles.Product__content}>
        <div className={styles.content__image}>
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className={styles.content__info}>
          <div className={styles.info__name}>
            <h2>{product.name}</h2>
          </div>
          <Counter item={product} />
          <div className={styles.info__description}>
            {path !== "pizza" && path !== "sets" && path !== "drinks" ? (
              <>
                <p className={styles.description__title}>Состав:</p>
                <div className={styles.description__ingredients}>
                  {product?.ingredients?.map((item, index) => (
                    <p key={index}>
                      {item}
                      {index < product.ingredients.length - 1 ? "," : ""}
                    </p>
                  ))}
                </div>
              </>
            ) : path === "pizza" ? (
              <div className={styles.PizzaSize}>
                <PizzaSize sizes={product.sizes} />
              </div>
            ) : path === "sets" ? (
              <div className={styles.description__weight}>
                <p>
                  {product.weight} грамм, {product.count} кусочков
                </p>
              </div>
            ) : path === "drinks" ? (
              <div className={styles.description__category}>
                <p>{product.categories}</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.info__button}>
            <ButtonAddToCart item={product}>Хочу!</ButtonAddToCart>
          </div>
        </div>
      </div>
      <div className={styles.Slider}>
        <div className={styles.Slider__title}>
          <h1>Рекомендуем к этому товару</h1>
        </div>
        <Slider NumArr={7}></Slider>
      </div>
    </div>
  );
};

export default Product;
