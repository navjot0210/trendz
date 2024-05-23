import { createContext, useContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const useProductContext = () => {
  const [login, setLogin] = useState(true);
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) ?? [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const context = useContext(ProductContext);
  return context || { cart, setCart, login, setLogin };
};