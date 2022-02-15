import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/404/404.js';

function App() {
  return (
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            {/* traemos el componente que muestra la tienda (todos los productos) */}
            <Route path="/" element={ <ItemListContainer />} />
            {/* traemos el componente que muestra la tienda segun categoria*/}
            <Route path="/category/:categoryId" element={ <ItemListContainer />} />
            {/* traemos el componente que al hacer click en producto nos lleva al producto seleccionado (a través de su ID) */}
            <Route path="/producto/:productId" element={ <ItemDetailContainer />} />
            {/* pagina de error */}
            <Route path="*" element={ <Error404 />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
