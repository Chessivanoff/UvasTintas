import React, {createContext, useContext, useState} from 'react';

// Contexto que renderiza la lista de productos por medio del Context Provider. No pasa props por *TODOS* los elementos. Solo los necesarios globalmente dentro de un tree: de Context Provider a los children components que lo requiera
// 1)Necesitamos un ESTADO (useState) para guardar los ids
// 2) Agregar items al estado del Carrito
// 3) Eliminar items
// 4) Vaciar el carrito
// 5) Comprobar si X item esta en el carrito -> Array.some()
// 6) Devolver la cantidad de items en el carrito
// 7) Devolver el costo total de la compra

const CartContext = createContext ();

const useCartContext = () => useContext (CartContext); 

const {Provider} = CartContext;

// data que sera compartida con los children components
export function CartContextProvider ({ children }) {
    const [cart, setCart] = useState ([]);

    const addToCart = (item, cant) => { //para agregar al carrito
        const itemToCart = {...item, cant: cant };
        
        if ( isInCart(item.id)) {
            const newCart = [...cart];
            const indexEncontrado = newCart.findIndex(
                (product) => product.id === item.id
            );
            newCart[indexEncontrado].cant += cant;
            setCart(newCart);
        }
        else{
            setCart( (previousCart) => [...cart, itemToCart]) //para cuando el item no esta en el carrito
        }
    };

    const removeFromCart = (id) => { //para remover del carrito
        const itemRemoved = cart.filter ( (item) => item.id !== id );
        setCart(itemRemoved);
    };
    
    const isInCart = (id) => {
        //Se puede utilizar findIndex, find, some. Este ultimo es el mejor porque nos devuelve un "true"/"false"
        return cart.some( item => item.id === id);
    };

    const cantInCart = () => {
        let total = 0;
        return total
    }

    const calcPriceCart = () => {
        let total = 0;
        cart.forEach((element) => {
            total = total + element.price * element.cant;
        });
        return total;
    };


  return (
      // arriba, en CartContext, creamos el contexto. En el return, se le agrega el ".Provider". Wraps the different components. El "value" dentro del CartContext.Provider tendra la informacion que se compartira con todos los componentes: la function addToCart, la function isInCart
    <Provider
        value={{
                cart,
                addToCart,
                removeFromCart,
                cantInCart,
                calcPriceCart,
                isInCart,
    }}
    >
        {children} // "this" se refiere al CartContext que envuelve a todos los componentes. "Children" se refiere a todo lo envuelto en app.js 
    </Provider>
  );
};


export default useCartContext;