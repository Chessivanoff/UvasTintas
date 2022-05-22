import React from 'react'
import { dataVinos } from './DataVinos'

const ItemList = (props) => {
    console.log (props.ListaProductos)
  return (
    <div>
{props.ListaProductos.map((item)=> <dataVinos producto={item}/> )}


    </div>
  )
}

export default ItemList