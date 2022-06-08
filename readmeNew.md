## Desafío - "Crear un componente NavBar" --> localhost:300/

Cree un archivo NavBar.jsx dentro de la carpeta Components.

Tambien cree un archivo Footer y una Home. 

Tanto la navbar como el footer estan presentes en la Home. A su vez, la Home esta presente en el App.js

## Desafío - "Crear una Lista de Productos" --> localhost:300/products/

El archivo DataVinos.js cuenta con una array de datos sobre los productos que vende la e-commerce. El archivo VinosList muestra los productos al usuario por medio de cards. 

El archivo VinosCardsContainer dara la parte logica a esta pagina

## Desafío - "Crear un Detalle del Producto" -->localhost:300/products/detail

Al elegir un producto, el Usuario podra ver la descripción especifica del producto. Desde la Lista, el usuario hace click en la card y accede al producto especifico. El usuario podra ver el archivo AlamosMalbecDetail.js

Mientras el producto se carga en pantalla, el usuario vera una Promise creada mediante el archivo getProduct.js Una mano con animacion indicara que el producto esta cargando y el usuario debera esperar.

##   Desafío - CartWidget --> localhost:300/products/cart/

El carrito de compras consta de 2 archivos. El usuario podra ver el contenido del archivo CartItem. Sin embargo, la logica detras de este archivo se encuentra en Logicos/CartContext.js e ItemCount.js.

El usuario podra agregar nuevos productos, eliminar los existentes, ser redireccionado a la Home en caso de que no exista productos en el carrito. El carrito podra sumar y restar precios e informar el precio final de la compra.


##   Desafío - Firebase --> localhost:300/products/:vinoId/
Integramos Firebase en el archivo VinoDetail_quara. Firebase contiene los datos de todos los productos existentes en la tienda e-commerce. 
El archivo App.js contiene un boton mediante el cual se puede enviar los datos de los productos a Firestore. El mismo boton tambien mostrara en consola los resultados de la promesa. 

