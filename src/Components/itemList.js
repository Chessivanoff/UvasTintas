import React from 'react'
import ItemCard from './ItemCard'

const ItemList = (props) => {
    console.log (props.ListaProductos)
  return (
    <div>
{props.ListaProductos.map((item)=> <ItemCard producto={item}/> )}


    </div>
  )
}

export default ItemList