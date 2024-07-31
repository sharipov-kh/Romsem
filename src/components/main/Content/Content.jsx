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
import Main from "./Routes/Main/Main";
import Product from "../../Product/Product";
import Reviews from "./Routes/reviews/Reviews";
import ContentLoyaut from "./ContentLayout/ContentLoyaut";
import React from "react"; 

const Content = () => {
  return (
    <div className={styles.home__content}>
      <Header />
      <div className={styles.container}>
        <Routes>
          <Route path="/Romsem" element={<ContentLoyaut />}>
            <Route path="Romsem/" element={<Main />} />
            <Route path="/Romsem/pizza" element={<Pizza />} />
            <Route path="/Romsem/sushi" element={<Sushi />} />
            <Route path="/Romsem/sets" element={<Sets />} />
            <Route path="/Romsem/wok" element={<Wok />} />
            <Route path="/Romsem/rolls" element={<Rolls />} />
            <Route path="/Romsem/salad" element={<Salad />} />
            <Route path="/Romsem/soup" element={<Soup />} />
            <Route path="/Romsem/corndogs" element={<CornDog />} />
            <Route path="/Romsem/drinks" element={<Drinks />} />
            <Route path="/Romsem/combo" element={<Combo />} />
            <Route path="/Romsem/promotion" element={<Promotion />} />
            <Route path={"/Romsem/:path/product/:id"} element={<Product />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Content;
