import axios from "axios";
import Button from "../../../../../UI/Button/Button";
import styles from "./ReviewsForm.module.scss";
import { useForm } from "react-hook-form";

const toDate = (date) => {
  return new Intl.DateTimeFormat("ru-Ru", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(new Date(date));
};

const ReviewsForm = ({ cancelReviewHandler, setAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const addReview = (data) => {
    axios
      .post("https://romsem-omega.vercel.app/api/reviews", data)
      .then(reset(), setAdd(false));
  };

  return (
    <form onSubmit={handleSubmit(addReview)} className={styles.ReviewsForm}>
      <label className={styles._form__name}>
        Ваше Имя
        <input
          {...register("name", {
            required: "Поле обезательно к заполнению",
            minLength: {
              value: 2,
              message: "Минимум 2 символа",
            },
            pattern: {
              value: /^[A-ZА-ЯЁ][a-zа-яё]+$/,
              message:
                "Имя должно начинаться с заглавной буквы и содержать только буквы",
            },
          })}
          placeholder="Ваше Имя"
          type="text"
          className={errors.name && styles.error}
        />
        <span className={styles.errorName}>
          {errors?.name && errors?.name?.message}
        </span>
      </label>
      <label className={styles._form__reviews}>
        Ваш Отзыв
        <textarea
          {...register("text", {
            required: "Поле обезательно к заполнению",
            minLength: {
              value: 5,
              message: "Минимум 5 символа",
            },
          })}
          className={errors?.text && styles.error}
          placeholder="Напишите Отзыв"
        />
        <span className={styles.errorText}>
          {errors?.text && errors?.text?.message}
        </span>
      </label>
      <input {...register("date")} type="hidden" value={toDate(Date.now())} />
      <div className={styles._form__button}>
        <Button type="submit">Добавить</Button>
        <Button onClick={cancelReviewHandler} type="reset">
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default ReviewsForm;
