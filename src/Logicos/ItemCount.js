import React, {useState} from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    // handleSunstract => para restar 

    const handleSubstract = () => {
        if(count > initial) {
            setCount((counter) => counter - 1);
        }
    };

    // handleSum => para sumar

    const handleAdd = () => {
        if(count < stock) {
            setCount((counter) => counter + 1);
        }
    };

    return (

        <div>
            <div>
                <button onClick={handleSubstract}>-</button>
                <span>{}</span>
                <button onClick={handleAdd}>+</button>
            </div>

            <div>
            |   <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>

    );
};

export default ItemCount;