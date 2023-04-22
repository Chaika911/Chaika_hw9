import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import Contacts from '../Contacts/Contacts';
import Catalog from '../Catalog/Catalog';
import ProductPage from '../ProductPage/ProductPage';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const products = [
  {
    name: 'Continental',
    id: 1,
    price: 980
  },
  {
    name: 'Toyo',
    id: 2,
    price: 750
  },
  {
    name: 'Nokian',
    id: 3,
    price: 1350
  },
  {
    name: 'Hankook',
    id: 4,
    price: 1120
  },
  {
    name: 'Bridgestone',
    id: 5,
    price: 875
  }
]
function App() {
const [isOver18, setIsOver18] = useState(false);

const handleOver18Click = () => {
  setIsOver18(!isOver18)
}

  return (
    <div className="App">
      <button
        className={isOver18 ? 'green' : 'red'}
        onClick={handleOver18Click}>
        I am over 18
      </button>


      <BrowserRouter>
        <Navigation products={products}/>
        <Routes>

          <Route path='/' element={<Main />} >
            <Route path='/catalog' element={<Catalog products={products} />}/>
            <Route path='/catalog/:productId' element={<ProductPage products={products}/>} />

          </Route>
          <Route path='/contacts' element={ <Contacts /> } />

          <Route path='/private' element={<PrivateRoute isOver18={isOver18}/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
