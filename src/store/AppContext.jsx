import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);

  const onClickPlus = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const onClickMinus = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const onDeleteItem = (item) => {
    setCart(
      cart.filter((el) => {
        return el.name !== item.name;
      })
    );
  };
  const addToCart = (item) => {
    const idx = cart.findIndex((el) => el.name === item.name);

    if (idx >= 0) {
      cart[idx].count++;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          ...item,
          count: 1,
        },
      ]);
    }
  };

  const onClickPlusHandler = (item) => {
    setCart(
      cart.map((el) => {
        if (item.name === el.name) {
          return { ...el, count: el.count + 1 };
        } else {
          return el;
        }
      })
    );
  };

  const onClickMinusHandler = (item) => {
    if (item.count > 1) {
      setCart(
        cart.map((el) => {
          if (el.name === item.name) {
            return { ...el, count: el.count - 1 };
          } else {
            return el;
          }
        })
      );
    } else {
      setCart(cart.filter((el) => el.name !== item.name));
    }
  };

  const openCart = () => {
    setOpen(!open);
  };

  const value = {
    open,
    openCart,
    cart,
    addToCart,
    onClickPlusHandler,
    onClickMinusHandler,
    count,
    onClickPlus,
    onClickMinus,
    onDeleteItem,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
