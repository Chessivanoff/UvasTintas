import React, {createContext, useContext, useState} from 'react';

export const CartContext = createContext ({});

export const useCartContext = () => useContext (CartContext); 

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState ([]);

    function addToCart (item, quantity) {
        console.log({ item, quantity});
        if (isInCart(item.id)) {
            return setCartList (
                cartList.map ((producto) =>
                producto.id === item.id
                ? { ...producto, quantity: producto.quantity + quantity}
                :producto
            )
        );
    }
        
    setCartList ([...cartList, { ...item, quantity }]);
    }

    function isInCart(id) {
        return cartList.some((item) => item.id === id);
    }

  return (
    <CartContext
    value={{
        addToCart,
    }}>
        {children}
    </CartContextProvider>
  );
};

export default CartContextProvider