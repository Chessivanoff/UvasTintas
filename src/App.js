import './App.css';
import Home from './Components/Home';
import VinosCardsContainer from './Logicos/VinosCardsContainer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ItemDetailContainer from './Logicos/ItemDetailContainer';
import CartContext from './Logicos/CartContext';
import CartItem from './Components/CartItem';



function App() {
  return (

    <>
    <CartContext>

    <BrowserRouter>

        <NavBar/>

        <Routes> 

            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<VinosCardsContainer/>}/>
            <Route path="products/:vinoId" element={<ItemDetailContainer/>}/>
            <Route path="products/Cart" element = {<CartItem/>}/>

        </Routes>

        <Footer/>
    </BrowserRouter>

    </CartContext>

      
 



    </>


  );
}

export default App;
