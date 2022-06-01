import React from 'react'
import { Link } from 'react-router-dom'
import { dataVinos } from '../Logicos/DataVinos'

const VinosList = (productos) => {
  return (
   
<>
  
  
  <div style={{ display: 'flex', flexWrap:'wrap'}}>

      {dataVinos.map((vino) => (

        <div key={vino.id} 
        className={ "rounded-lg" } 
        style={{
          display:"flex", 
          flexDirection: "column", 
          alignItems:"center", 
          border:'solid violet 4px', 
          margin: 10, 
          padding: 5,
          }}
          >

          <h2> {vino.name} </h2>
          <h3> {vino.year} </h3>
          <h3> {vino.category} </h3>
          <img 
          height="300" 
          width="250" 
          src={vino.pictureUrl} 
          alt="Imagen de la botella a modo de presentación"/>
          <h3 style={{alignItems:"center", margin:'10px', padding:'5px' }}> {vino.description} </h3>

            <div className="flex items-stretch">
              <div><Link to={ '/product/$ { id }' }>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style= {{margin:'15px', padding:'10px'}} >Comprar
                </button></Link>
              </div>


              <div>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style= {{margin:'15px', padding:'10px'}} >Ver descripción
                </button>
              </div>
            </div>
        </div>
      ))}
  </div>
</>




  )
}

export default VinosList