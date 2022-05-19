import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import ItemsCards from './Components/ItemsCards';
import AlamosMalbecDetail from './Components/AlamosMalbecDetail';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NavBar from './Components/NavBar';


function App() {
  return (


    <BrowserRouter>


        <Routes> 

            <Route path="/" element={<Home/> }/>
            <Route path="/products" element={<ItemsCards/>}/>
            <Route path="product/:id" element={<AlamosMalbecDetail/>}/>

        </Routes>
    </BrowserRouter>

  );
}

export default App;
