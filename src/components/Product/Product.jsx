import { useParams } from "react-router-dom";
import styles from "./Product.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const { path, id } = useParams();
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios(`http://localhost:8080/${path}/${id}`)
      .then(({ data }) => setProduct(data))
  }, []);

  return (
    <div className={styles.Product}>
      <div className={styles.Product__navigation}>
        <button onClick={() => window.history.back()}>Назад</button>
        <button onClick={() => window.history.forward()}>Вперед</button>
        <p>{product.name}</p>
      </div>
    </div>
  );
};

export default Product;
