import React from 'react'
import ItemsCards from '../Components/ItemsCards'

const ItemList = (props) => {
    console.log (props.ListaProductos)
  return (
    <div>
{props.ListaProductos.map((item)=> <ItemsCards producto={item}/> )}


    </div>
  )
}

export default ItemList