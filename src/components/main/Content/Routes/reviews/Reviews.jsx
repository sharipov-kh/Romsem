import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Review.module.scss";
import Button from "../../../../UI/Button/Button";
import ReviewsForm from "./reviewsForm/ReviewsForm";

const Review = () => {
  const [review, setReviews] = useState([]);
  const [add, setAdd] = useState(false);

  const addReviewHandler = () => {
    setAdd(true);
  };
  const cancelReviewHandler = () => {
    setAdd(false);
  };

  useEffect(() => {
    axios("http://localhost:8080/reviews").then(({ data }) => setReviews(data));
  }, [review, setReviews]);

  return (
    <div className={styles.review}>
      <div className={styles.review__title}>
        <div className={styles.title__left}>
          <h1>Отзыв</h1>
        </div>
        <div className={styles.title__right}>
          <Button onClick={addReviewHandler}>+ Добавить отзыв</Button>
        </div>
      </div>
      {add ? (
        <ReviewsForm
          cancelReviewHandler={cancelReviewHandler}
          setAdd={setAdd}
        />
      ) : (
        ""
      )}
      <div className={styles.review__content}>
        <ul className={styles.content__list}>
          {review.map((item) => (
            <li key={item.id} className={styles.content__item}>
              <div className={styles._item__name}>
                <h3>{item.name}</h3>
                <p>{item.date}</p>
              </div>
              <div className={styles._item__description}>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Review;
