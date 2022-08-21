//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Nabvar from './components/Nabvar';

function App() {
  return (
    <>
      <Nabvar />
      <ItemListContainer 
        saludo='hola mundo'
      
      />
    </>
  );
}

export default App;
