import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Product.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import prevBtn from "../../assets/Icon/product/prevBtn.svg";
import Slider from "./Slider/Slider";
import ProductContainer from "./ProductContainer";

const Product = () => {
  const { pathname } = useLocation();
  const { path, id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  

  useEffect(() => {
    (async () => {
      await axios(`https://romsem-omega.vercel.app/api/${path}/${id}`).then(
        ({ data }) => setProduct(data)
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

      <ProductContainer item={product} />

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
