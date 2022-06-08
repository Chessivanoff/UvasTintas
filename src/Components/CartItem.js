import React from "react";
import useCartContext from "../Logicos/CartContext";
import {Link} from "react-router-dom";


//"CartItem" consume contexto del CartContext.js. No consume de ningun props.
function CartItem () {
  const { cart, calcPriceCart, removeFromCart } = useCartContext();

  if ( cart.length === 0){
    return <div>
      <h2>No hay productos en tu carrito</h2>
      <Link to='/'>Home</Link>
    </div>
  }
  else {
        return (
        <div>
          { cart.map(item => (
              <div key={item.id}>
                  <h1>{item.name}</h1>
                  <p>Cantidad: $ {item.cant}</p>
                  <p>Precio: {item.price}</p>
                  <p>Total: ${item.cant * item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar producto</button>
              </div>
            ))}
            <h2>Total de la compra: ${calcPriceCart()} </h2>
          
        </div>
        );
 }
}

export default CartItem;