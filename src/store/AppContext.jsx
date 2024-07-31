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
        if (el.path === "pizza") {
          return el.name !== item.name || el.size !== item.size;
        } else {
          return el.name !== item.name;
        }
      })
    );
  };

  const addToCart = (item) => {
    const idx = cart.findIndex((el) => {
      if (item.path === "pizza") {
        return el.name === item.name && el.size === item.size;
      } else {
        return el.name === item.name;
      }
    });
  
    if (idx >= 0) {
      cart[idx].count += count;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          ...item,
          count: count,
        },
      ]);
    }
    setCount(1);
  };

  const onClickPlusHandler = (item) => {
    let idx = cart.findIndex((el) => {
      if (item.path === "pizza") {
        return el.name === item.name && el.size === item.size;
      } else {
        return el.name === item.name;
      }
    });

    if (idx >= 0) {
      setCart(
        cart.map((el) => {
          if (el.path === "pizza") {
            if (item.name === el.name && el.size === item.size) {
              return { ...el, count: el.count + 1 };
            } else {
              return el;
            }
          } else if (item.name === el.name) {
            return { ...el, count: el.count + 1 };
          } else {
            return el;
          }
        })
      );
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

  const onClickMinusHandler = (item) => {
    if (item.count > 1) {
      setCart(
        cart.map((el) => {
          if (el.path === "pizza") {
            if (item.name === el.name && el.size === item.size) {
              return { ...el, count: el.count - 1 };
            } else {
              return el;
            }
          } else if (item.name === el.name) {
            return { ...el, count: el.count - 1 };
          } else {
            return el;
          }
        })
      );
    } else {
      setCart(
        cart.filter((el) => {
          if (el.path === "pizza") {
            return el.name !== item.name || el.size !== item.size;
          } else {
            return el.name !== item.name;
          }
        })
      );
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
