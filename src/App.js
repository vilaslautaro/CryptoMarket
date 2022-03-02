import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/404/404.js';
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart/Cart';
import {MessageContextProvider} from './context/MessageContext'
import Message from './components/ItemDetailContainer/ItemDetail/Message/Message'
import AddItemContainer from './components/AddItemContainer/AddItemContainer'

function App() {
  return (
    <MessageContextProvider>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Message/>
          <main>
            <Routes>
              {/* traemos el componente que muestra la tienda (todos los productos) */}
              <Route path="/" element={<ItemListContainer />} />
              {/* traemos el componente que muestra la tienda segun categoria*/}
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              {/* traemos el componente que al hacer click en producto nos lleva al producto seleccionado (a través de su ID) */}
              <Route path="/producto/:productId" element={<ItemDetailContainer />} />
              {/* comoponente de Cart, si hacemos click en el carrito */}
              <Route path="/cart" element={<Cart />} />
              {/* pagina de error */}
              <Route path="*" element={<Error404 />} />
              {/* componente con formulario para agregar productos */}
              <Route path="/product/add" element={ <AddItemContainer/> } />
            </Routes>
          </main>
        </div>
      </CartContextProvider>
    </MessageContextProvider>
  );
}

export default App;
