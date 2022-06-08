import Home from './Components/Home';
import VinosCardsContainer from './Logicos/VinosCardsContainer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ItemDetailContainer from './Logicos/ItemDetailContainer';import CartContext from './Logicos/CartContext';
import CartItem from './Components/CartItem';
import VinoDetail_quara from './Components/VinoDetail_quara';



function App() {
  return (

    <>
    <BrowserRouter>
        <CartContext> {/* es el provider que envuelve todo lo que queremos que afecte. En este caso, queremos que afecte a toda la app.*/}

        <button onClick={VinoDetail_quara}>Enviar datos a Firestore</button>
            <NavBar/>

                <Routes> 

                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<VinosCardsContainer/>}/>
                    <Route path="/detail" element={<VinoDetail_quara/>}/>
                    <Route path="/products/:vinoId" element={<ItemDetailContainer/>}/>
                    <Route path="/products/cart" element = {<CartItem/>}/>

                </Routes>
                
                <Home></Home>

              <Footer/>
         </CartContext>
    </BrowserRouter>

      
 



    </>


  );
}

export default App;
