import styles from "./HeaderListContent.module.scss";

const HeaderListContent = ({ allDB }) => {
  return (
    <div className={styles["header__search-container"]}>
      {allDB.length === 0 ? (
        <p className={styles["empty-massege"]}>К сожалению, данный товар не найден</p>
      ) : (
        <ul className={styles["header__search-list"]}>
          {allDB.map((item, index) => (
            <li key={index} className={styles["header__search-item"]}>
              <div className={styles.search__item}>
                <div className={styles["search__item-img"]}>
                  <img src={item.imageUrl} alt={item.name} />
                </div>
                <div className={styles["search__item-text"]}>
                  <div className={styles["item__text-name"]}>
                    <p>{item.name}</p>
                  </div>
                  <div className={styles["item__text-description"]}>
                    <p></p>
                  </div>
                </div>
                <div className={styles["search__item-price"]}>
                  <p>{item.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeaderListContent;
