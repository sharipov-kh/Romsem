import styles from "./SortItem.module.scss";

const SortItem = ({ text, setSort }) => {
  return (
    <li className={styles["sort__list-item"]} onClick={() => setSort(text)}>
      {text}
    </li>
  );
};

export default SortItem;
