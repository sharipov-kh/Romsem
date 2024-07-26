import { useParams } from "react-router-dom";
import styles from "./Product.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import prevBtn from '../../assets/Icon/product/prevBtn.svg'

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
        <button onClick={() => window.history.back()}><img src={ prevBtn } alt="prevBtn"/> Назад</button>
      </div>
    </div>
  );
};

export default Product;
