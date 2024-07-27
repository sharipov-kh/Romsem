import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Slider.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRandom } from "../../../hooks/useRandomArr";

const Slider = () => {
  const [slide, setSlide] = useState([]);
  const { getRandomItems } = useRandom();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/all");
        const flattenedData = Object.values(data).reduce((acc, rec) => {
          return [...acc, ...rec];
        }, []);
        setSlide(getRandomItems(flattenedData, 14));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      className="mySwiper"
    >
      {slide.map((item, index) => (
        <SwiperSlide key={index}>
          <div className={styles.SwiperSlide}>
            <div className={styles.Slide__image}>
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className={styles.Slide__name}>
              <h3>{item.name}</h3>
            </div>
            <div className={styles.Slide__price}>
              <h3>{item.price} сом</h3>
              <button className={styles.Slide__add}>+</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
