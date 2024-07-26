import ContentLoader from "react-content-loader";

import styles from "./Loading.module.scss";

const MyLoader = () => (
  <div className={styles.loader}>
    <ContentLoader
      speed={2}
      width="100%"
      height='100%'
      viewBox="0 0 297 408"
      backgroundColor="#e8e8e8"
      foregroundColor="#d6d6d6"
    >
      <rect x="0" y="375" rx="5" ry="5" width="95" height="24" />
      <rect x="155" y="370" rx="5" ry="5" width="143" height="34" />
      <rect x="0" y="326" rx="3" ry="3" width="150" height="20" />
      <rect x="0" y="283" rx="3" ry="3" width="100%" height="25" />
      <rect x="1" y="1" rx="10" ry="10" width="100%" height="262" />
    </ContentLoader>
  </div>
);

export default MyLoader;
