//import logo from './logo.svg';
import NavBar from "./components/Nabvar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Greeting from "./components/Greeting";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
    <BrowserRouter> 
    <NavBar />
    <Greeting />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
    
    
    </Routes>
    </BrowserRouter>
    
    </>
    )
  
}

export default App;