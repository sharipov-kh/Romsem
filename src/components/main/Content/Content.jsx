import { Route, Routes } from "react-router-dom";
import Header from "../../Header/Header";
import styles from "./Content.module.scss";
import Pizza from "./Routes/Pizza";
import Sushi from "./Routes/Sushi";
import Sets from "./Routes/Sets";
import Wok from "./Routes/Wok";
import Rolls from "./Routes/Rolls";
import Salad from "./Routes/Salad";
import Soup from "./Routes/Soup";
import CornDog from "./Routes/CornDog";
import Drinks from "./Routes/Drinks";
import Combo from "./Routes/Combo";
import Promotion from "./Routes/Promotion";
import Main from "./Routes/Main";
import Product from "../../Product/Product";

const Content = () => {
  return (
    <div className={styles.home__content}>
      <Header />
      <div className={styles.container}>
        <Routes>
          <Route path="/Romsem" element={<Main />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/sushi" element={<Sushi />} />
          <Route path="/sets" element={<Sets />} />
          <Route path="/wok" element={<Wok />} />
          <Route path="/rolls" element={<Rolls />} />
          <Route path="/salad" element={<Salad />} />
          <Route path="/soup" element={<Soup />} />
          <Route path="/corndogs" element={<CornDog />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/combo" element={<Combo />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path={'/:path/product/:id'} element={<Product />} />
        </Routes>
      </div>
    </div>
  );
};

export default Content;
