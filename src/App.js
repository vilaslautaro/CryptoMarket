import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      {/* traemos el header */}
      <NavBar />
      {/* traemos la seccion de tienda de productos */}
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
