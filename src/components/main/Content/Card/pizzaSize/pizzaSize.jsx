import styles from "./pizzaSize.module.scss";

const PizzaSize = ({ sizes, activeIndex, setActiveIndex }) => {
  const onBtnclick = (size) => {
    setActiveIndex(size);
  };

  return (
    <div className={styles.Card__sizes}>
      <ul>
        {sizes?.map((size, index) => (
          <li
            key={index}
            className={`${activeIndex === size ? styles.active : ""}`}
            onClick={() => onBtnclick(size)}
          >
            <span>{size}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaSize;
