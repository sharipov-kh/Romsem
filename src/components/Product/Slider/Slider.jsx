import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Slider.module.scss";
import { useContext, useEffect, useState } from "react";

import axios from "axios";

import { Link, useParams } from "react-router-dom";

import { useRandom } from "../../../hooks/useRandomArr";
import { AppContext } from "../../../store/AppContext";

const Slider = ({ NumArr }) => {
  const { path, id } = useParams();
  const [slide, setSlide] = useState([]);
  const { getRandomItems } = useRandom();

  const { addToCart } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/all");
        const flattenedData = Object.values(data).reduce((acc, rec) => {
          return [...acc, ...rec];
        }, []);
        setSlide(getRandomItems(flattenedData, NumArr));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [path, id]);

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={3}
    >
      {slide.map((item, index) => (
        <SwiperSlide key={index}>
          <div className={styles.SwiperSlide}>
            <div className={styles.Slide__image}>
              <Link to={`/${item.path}/product/${item.id}`}>
                <img src={item.imageUrl} alt={item.name} />
              </Link>
            </div>
            <div className={styles.Slide__name}>
              <h3>{item.name}</h3>
            </div>
            <div className={styles.Slide__price}>
              <h3>{item.price} сом</h3>
              <button
                onClick={() => addToCart(item)}
                className={styles.Slide__add}
              >
                +
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
