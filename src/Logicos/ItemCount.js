import React, {useState} from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    //hook de estado
    const [count, setCount] = useState(initial);

    // handleSunstract => función para restar 

    const handleSubstract = () => {
        if(count > initial) {
            setCount((counter) => counter - 1);
        }
    };

    // handleSum => función para sumar

    const handleAdd = () => {
        if(count < stock) {
            setCount((counter) => counter + 1);
        }
    };

    return (

        <div>
            <div>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style= {{margin:'15px', padding:'10px'}} onClick={handleSubstract}>-</button>
                <span>{count}</span>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style= {{margin:'15px', padding:'10px'}} onClick={handleAdd}>+</button>
            </div>

            <div>
            |   <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style= {{margin:'15px', padding:'10px'}} onClick={() => onAdd(count)}>Agregar a mi compra</button>
            </div>
        </div>

    );
};

export default ItemCount;