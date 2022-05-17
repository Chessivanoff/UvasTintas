import React from 'react'

const ItemCard = ({producto}) => {
    console.log ('este es el producto', producto)
  return (
    <div>{producto.name}</div>
  )
}

export default ItemCard