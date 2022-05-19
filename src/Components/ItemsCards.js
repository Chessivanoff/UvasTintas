import React from 'react'
import { Link } from 'react-router-dom'

const ItemsCards = ({producto}) => {
  console.log ('este es el producto', producto)
  return (
    <>


    <div class={ "rounded-lg" }   style={{ border:'solid violet 4px', margin:'10px', padding:'5px' }}>

        <div>
            <strong> {producto.name} </strong>
            <div> {producto.year} </div>
            <div> {producto.category} </div>
            <div> {producto.pictureUrl}</div>
            <div> {producto.description} </div>
        </div>
        
        <div class="flex items-stretch">
            <div><Link to={ '/product/$ { id }' }><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style= {{margin:'15px', padding:'10px'}} >Comprar</button></Link></div>

            <div><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style= {{margin:'15px', padding:'10px'}} >Ver descripción</button></div>
        </div>

    </div>
    
    
    
    
    </>

  )
}

export default ItemsCards