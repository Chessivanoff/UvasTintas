import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from 'react';

//VinoDetail_quara trae la informacion del producto de Firebase. Primero, la muestra en la consola mediante la funcion "const getQuara"
const VinoDetail_quara = () => {

const [ quara ] = useState ([])

useEffect(() => {

  //datos extraidos de Firestore
  getQuara()
}, [])

const getQuara = () => {
  const db = getFirestore() //descriptor de la base de datos//
  const quaraDoc = doc(db, 'DataVinos', 'quara') //configura a qué colección accede con el 2do parametro de doc //
  getDoc( quaraDoc ).then( result => {
    if (result.exists()) {
        console.log(result);
        console.log(result.id);
      }
    })
}
   // le pasamos un descriptor de documento y se resuelve una promise//


  return (
    <div>
      <div> Cepa: {quara.category}</div>
      <div> Año: {quara.year}</div>
      <div> {quara.description}</div>
      <div> {quara.imgUrl}</div>
      <div> Precio: {quara.price}</div>
      



    </div>
    )
  }

export default VinoDetail_quara
