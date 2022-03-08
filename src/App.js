import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/404/404.js';
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart/Cart';
import { MessageContextProvider } from './context/MessageContext'
import Message from './components/Message/Message'
import AddItemContainer from './components/AddItemContainer/AddItemContainer'
import { SubNavContextProvider } from './context/SubNavContext';


function App() {
  return (
    <MessageContextProvider>
      <SubNavContextProvider>
        <CartContextProvider>
          <div className="App">
            <NavBar />
            <Message />
            <main>
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/producto/:productId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Error404 />} />
                <Route path="/product/add" element={<AddItemContainer />} />
              </Routes>
            </main>
          </div>
        </CartContextProvider>
      </SubNavContextProvider>
    </MessageContextProvider>
  );
}

export default App;
