import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./style/ProductContent.module.scss";
import Card from "../Card/Card";

const ProductContent = ({path, title, icon }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios(`http://localhost:8080/${path}`).then(({ data }) => setProduct(data));
  }, []);
  return (
    <div className={styles.product__content}>
      <div className={styles["product__content-header"]}>
        <div className={styles.header__title}>
          <img
            className={styles["header__title-img"]}
            width={40}
            height={40}
            src={icon}
            alt="Logo"
          />
          <h3 className={styles["header__title-text"]}>{title}</h3>
        </div>
        <div className={styles["header__sort"]}>
          <p className={styles.sort__title}>Сортировка</p>
          <p className={styles["sort__title-default"]}>
            По умолчанию
            <span>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1L7 7L1 0.999999"
                  stroke="#F46D40"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
      <div className={styles["product__content-row"]}>
        <div className={styles.container}>
          {product.map((item) => (
            <Card
              key={item.id}
              image={item.imageUrl}
              name={item.name}
              sizes={item.sizes}
              price={item.price}
              path={path}
              ingredients={item.ingredients}
              categories={item.categories}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
