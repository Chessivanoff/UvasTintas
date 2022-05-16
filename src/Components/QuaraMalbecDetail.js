import React from 'react';
import quaraMalbec from './Images/quaraMalbec.jpg';

const QuaraMalbecDetail = () => {
  return (
    <div>
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

    </div>
  )
}

export default QuaraMalbecDetail