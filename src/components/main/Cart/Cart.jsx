import { useContext, useEffect } from "react";
import styles from "./Cart.module.scss";
import { AppContext } from "../../../store/AppContext";
import Counter from "./Counter/Counter";

const Cart = () => {
  const { open, openCart, cart,onDeleteItem } = useContext(AppContext);

  useEffect(() => {
    document.body.classList.toggle("active__body", open);
  }, [open]);

  return (
    <>
      <>
        <div
          onClick={openCart}
          className={
            open
              ? `${styles.backDrop__open} ${styles.backDrop}`
              : styles.backDrop
          }
        ></div>
        <div
          className={open ? `${styles.Cart__open} ${styles.Cart}` : styles.Cart}
        >
          {cart.length !== 0 ? (
            <div className={styles._cart__header}>
              <div className={styles._cart__title}>
                <h1>Корзина</h1>
              </div>
              <ul className={styles._cart__list}>
                {cart.map((item, index) => (
                  <li key={index} className={styles._cart__item}>
                    <div className={styles._item__image}>
                      <img src={item.imageUrl} alt={item.name} />
                    </div>
                    <div className={styles._item__info}>
                      <div className={styles._item__name}>
                        <p>{item.name}</p>
                      </div>
                      <div className={styles._item__action}>
                        <Counter item={item}></Counter>
                        <span>{item.price * item.count} Сом</span>
                      </div>
                    </div>
                    <button onClick={() => onDeleteItem(item)} className={styles.cart__delete}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#bbb"
                        height="15px"
                        width="15px"
                        version="1.1"
                        id="Capa_1"
                        viewBox="0 0 460.775 460.775"
                        xmlSpace="preserve"
                      >
                        <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className={styles._cart__empty__header}>
              <div className={styles._empty__header__container}>
                <div className={styles._container__title}>
                  <h1>Ваша корзина пуста.</h1>
                </div>
                <div className={styles._container__text}>
                  <p>Добавьте же скорее что-нибудь!</p>
                </div>
                <div className={styles._container__button}>
                  <button>Бесплатная доставка от 800 СОМ</button>
                </div>
              </div>
            </div>
          )}
          {cart.length !== 0 && (
            <div className={styles.total__pice}>
              <div className={styles.total__left}>
                <pre>
                  {cart.reduce((acc, rec) => {
                    return acc + rec.price * rec.count;
                  }, 0)}{" "}
                  Сом
                </pre>
              </div>
              <div className={styles.total__right}>
                <button>Оформить Заказ</button>
              </div>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default Cart;
