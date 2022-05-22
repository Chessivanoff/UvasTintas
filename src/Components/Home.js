import React from 'react'



const Home = () => {
  return (

    <>

      <div className="App">
            <header>
                  <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="Burbujas" src="./Images/burbujasHero.jpg"/>
                      <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Bienvenido a Uvas Tintas</h1>
                        <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nunc, scelerisque vel nibh vitae, aliquam vehicula felis. Sed pellentesque a quam quis ullamcorper. Duis non erat dapibus, vehicula nibh sit amet, placerat tellus. In suscipit, tellus vitae aliquam placerat, leo lectus gravida velit, at sagittis sem augue eu nulla. Phasellus tristique pulvinar posuere. Etiam convallis sit amet eros vitae eleifend. Curabitur lacinia nulla vel dui mattis, nec feugiat ligula sodales. Mauris feugiat at neque tristique scelerisque. </p>
                        <div className="flex justify-center">
                          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Navegar</button>
                        </div>
                      </div>
                    </div>
                  </section>

            </header>
      </div>

    </>

  )
}

export default Home