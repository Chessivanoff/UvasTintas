import React from 'react'
import { DataVinos } from './DataVinos'

const ItemList = ( vinos ) => {
    console.log (props.ListaProductos)
  return (
    <div>
      {vinos.ListaProductos.map((item )=> {
        return (
          <DataVinos producto={item}/>
        )
      }) }
    </div>
  )
}

export default ItemList