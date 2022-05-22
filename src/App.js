import './App.css';
import Home from './Components/Home';
import VinosCardsContainer from './Logicos/VinosCardsContainer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ItemDetailContainer from './Logicos/ItemDetailContainer';
import CartContextProvider from './Logicos/CartContextProvider';



function App() {
  return (

    <>
    <CartContextProvider/>

    <BrowserRouter>

        <NavBar/>

        <Routes> 

            <Route path="/" element={<Home/> }/>
            <Route path="/products" element={<VinosCardsContainer/>}/>
            <Route path="products/:vinoId" element={<ItemDetailContainer/>}/>

        </Routes>

        <Footer/>
    </BrowserRouter>
      
 



    </>


  );
}

export default App;
