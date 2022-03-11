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
import { SubNavContextProvider } from './context/SubNavContext';
import Footer from './components/Footer/Footer'
import { ScreenWidthProvider } from './context/screenWidth';



function App() {
  return (
    <ScreenWidthProvider>
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
                  <Route path="/search/:valueSearch" element={<ItemListContainer />} />
                  <Route path="/producto/:productId" element={<ItemDetailContainer />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<Error404 />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </CartContextProvider>
        </SubNavContextProvider>
      </MessageContextProvider>
    </ScreenWidthProvider>
  );
}

export default App;
