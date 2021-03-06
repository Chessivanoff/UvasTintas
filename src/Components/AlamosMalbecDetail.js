import React from 'react';
import { CartContextProvider } from '../Logicos/CartContext';
import ItemCount from '../Logicos/ItemCount';
import {Link} from "react-router-dom";
import { useState, handleOnAdd } from 'react';


const AlamosMalbecDetail = ({vino}) => {
  const [isInCart, setIsInCart] = useState(false);

  const { cart, addToCart } = CartContextProvider();

  function onAdd(count) {
    setIsInCart(true);
    addToCart (vino, count);
  }

  return (

    <div>
        
        <div
        className={ "text-gray-600 body-font" } 
        style={{
          display:'flex', 
          flexDirection: 'column', 
          alignItems:'center', 
          }}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{vino.id} 
                    </h1>

                    <p className="mb-8 leading-relaxed">{vino.description}</p>
                    
                    <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Comprar</button>
                    </div>
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img 
                    height="300" 
                    width="250" 
                    src={vino.pictureUrl} 
                    alt="Imagen de la botella a modo de presentación"/>
                </div>
                
                {isInCart ? (
                  <Link to="/cart">Ir al carrito</Link>
                ) : (
                  <ItemCount initial={1} stock={vino.stock} onAdd={handleOnAdd}/>
                )}

            </div>
        </div>
    </div>

  );
}

export default AlamosMalbecDetail; 