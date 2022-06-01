import React from "react";
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dataVinos } from "../Logicos/DataVinos";


const CartItem = ({dataVinos, deleteCartById}) => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Carrito de Compras</h1>
              <h2 className="font-semibold text-2xl">Tus productos</h2>
            </div>

                <div className="" onClick={()=>deleteCartById(dataVinos.id)}>
                    <FontAwesomeIcon icon={faCartArrowDown} color={'#1d1d1d'} size={'1x'}/>
                </div>

                <div className="fill-current text-gray-600 w-3">
                    <img src={dataVinos.pictureUrl}/>
                </div>

                <div>
                    <h2 className="font-semibold text-gray-600 text-xs uppercase w-2/5">{dataVinos.name}</h2>
                    
                    <span className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">${dataVinos.price}</span>
                    <span className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"><strong>Cantidad:</strong> {dataVinos.qty}</span>
                    <span className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"><strong>Total:</strong> ${dataVinos.qty * dataVinos.price}</span>
                </div>

                <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Finalizar Compra</button>
                </div>

            </div>

          </div>

      </div>
            
    </div>
  )
}

export default CartItem