import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./style/ProductContent.module.scss";
import Card from "../Card/Card";
import Loading from "../../../UI/Loader/Loading";
import SortItem from "./SortItem";


const ProductContent = ({ path, title, icon }) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("По умолчанию");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await axios(`http://localhost:8080/${path}`).then(({ data }) =>
        setProduct(data)
      );
      setIsLoading(false);
    })();
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
            {sort}
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
          <ul className={styles["header__sort-list"]}>
            <SortItem setSort={setSort} text="Название" />
            <SortItem setSort={setSort} text="Сначала дороже" />
            <SortItem setSort={setSort} text="Сначала дешевле" />
            {path === "sets" ? (
              <>
                <SortItem setSort={setSort} text="Количество кусочков" />
                <SortItem setSort={setSort} text="Вес" />
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
      <div className={styles["product__content-row"]}>
        <div className={styles.container}>
          {isLoading
            ? Array.from({ length: 12 }).map((_, index) => (
                <Loading key={`loading-${index}`}>Загрузка</Loading>
              ))
            : product
                .sort((a, b) => {
                  if (sort === "Название") {
                    return a.name > b.name ? 1 : -1;
                  } else if (sort === "Сначала дороже") {
                    return b.price - a.price;
                  } else if (sort === "Сначала дешевле") {
                    return a.price - b.price;
                  } else if (sort === "Количество кусочков") {
                    return a.count - b.count;
                  } else if (sort === "Вес") {
                    return a.weight - b.weight;
                  }
                })
                .map((item) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    image={item.imageUrl}
                    name={item.name}
                    sizes={item.sizes}
                    price={item.price}
                    path={path}
                    count={item.count}
                    weight={item.weight}
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
