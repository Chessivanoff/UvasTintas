import React, { useEffect, useState } from 'react'
import AlamosMalbecDetail from '../Components/AlamosMalbecDetail';
import { getProduct } from './getProduct'


// useState => guarda estados
// useEffect => maneja el cliclo de vida del componente

const ItemDetailContainer = () => {

const [producto, setProducto] = useState([]);
const [loading, setLoading] = useState (true); 

useEffect(() => {
    setLoading(true);
    getProduct()
    .then(({ result }) => setProducto({ result }))
    .finally(() => setLoading(false));

}, []);


  return (
      <>
        <div style={{
          display:"flex", 
          flexDirection: "column", 
          alignItems:"center", }}>Detalle Del Vino</div>
        
        {
            loading ? <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> :
            <AlamosMalbecDetail producto={producto}/>
        }
        
      </>
  );
};

export default ItemDetailContainer;