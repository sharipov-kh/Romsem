import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Slider.module.scss";
import { useContext, useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useRandom } from "../../../hooks/useRandomArr";
import { AppContext } from "../../../store/AppContext";

const Slider = ({ NumArr }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const { path, id } = useParams();
  const [slide, setSlide] = useState([]);
  const { getRandomItems } = useRandom();

  const { addToCart } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://sharipov-kh.github.io/Romsem-api/db.json"
        );
        const flattenedData = Object.values(data.all).reduce((acc, rec) => {
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
              {isLoading && (
                <ContentLoader
                  speed={3}
                  width={200}
                  height={200}
                  viewBox="0 0 200 200"
                  backgroundColor="#e8e8e8"
                  foregroundColor="#d6d6d6"
                >
                  <circle cx="100" cy="100" r="100" />
                </ContentLoader>
              )}
              <Link to={`/${item.path}/product/${item.id}`}>
                <img
                  src={item.imageUrl}
                  style={{ display: isLoading ? "none" : "block" }}
                  alt={item.name}
                  onLoad={handleImageLoad}
                />
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
