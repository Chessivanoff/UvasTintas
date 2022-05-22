import { dataVinos } from "./DataVinos";
import { useState, useEffect } from "react";
import VinosList from "../Components/VinosList";

const VinosCardsContainer = () => {
  const [productos, setProductos] = useState([]);
  console.log(productos);

  const promise = (error) =>
    new Promise((res, rej) => {
      setTimeout(() => {
        if (error == false) {
          res(dataVinos);
        } else {
          rej("Hubo un error");
        }
      }, 2000);
    });

  const parametro = false;

  useEffect(() => {
    promise(parametro)
      .then((infoDeVinos) => {
        setProductos(infoDeVinos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  promise(parametro)
    .then((infoDeVinos) => {
      setProductos(infoDeVinos);
    })
    .catch((error) => {
      console.log(error);
    });
  return (

    <>
    <h1 style={{alignItems:"center"}}> Lista de Vinos </h1>

    <VinosList/>
    
    
    </>
  

  );
};

export default VinosCardsContainer;
