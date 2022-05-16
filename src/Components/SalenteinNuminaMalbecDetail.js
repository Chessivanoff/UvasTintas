import React from 'react'

const SalenteinNuminaMalbecDetail = () => {
  return (
    <div>
        
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">1. Salentein NUMINA Malbec
                    </h1>

                    <p className="mb-8 leading-relaxed">Color rojo violeta, intenso y profundo. Aroma, bayas negras maduras, mermeladas de ciruelas, especiado y fresco. En la boca tiene una entrada dulce, es fresco, jugoso y concentrado en la media boca, en el retrogusto se sienten las mermeladas y la vainilla.</p>
                    
                    <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Comprar</button>
                    </div>
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="Salentein NUMINA Malbec" src= "./Components/Images/salenteinNuminaMalbec.jpg"/>
                </div>
            </div>
        </section>






    </div>
  )
}

export default SalenteinNuminaMalbecDetail