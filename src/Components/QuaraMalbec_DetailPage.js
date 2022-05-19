import React from 'react';
import { useParams } from 'react-router-dom';
import VinosCardsContainer from '../Logicos/VinosCardsContainer';

const QuaraMalbec_DetailPage = () => {

    const { id } = useParams (); //es un string

  return (

    <main> 

        <h1>Detalle de Producto {id} </h1>
        <VinosCardsContainer id={id} />

        <div>

            <div> {producto.category} </div>
            <div> {producto.pictureUrl}</div>
            <div> {producto.description} </div>

        </div>

        <div class="flex items-stretch">
            <div><Link to={ '/product/$ { id }' }><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style= {{margin:'15px', padding:'10px'}} >Comprar</button></Link></div>
            <div><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style= {{margin:'15px', padding:'10px'}} >Ver descripción</button></div>
        </div>

    </main>










   /* <div>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">2. Quara Malbec
                    </h1>

                    <p className="mb-8 leading-relaxed">Se trata de un vino típicamente salteño, fiel exponente de Cafayate: lugar alto y seco. Para su elaboración se riega lo mínimo e indispensable las plantas, para que la uva quede más concentrada y sabrosa. El resultado es un vino joven pero con carácter, ideal para cualquier momento.</p>
                    
                    <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Comprar</button>
                    </div>
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="Salentein NUMINA Malbec" src= "./Components/Images/quaraMalbec.jpg"/>
                </div>
            </div>
        </section>

    </div> */

  )
}

export default QuaraMalbec_DetailPage