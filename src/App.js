
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './componentes/home/home';
import MostrarProducto from './componentes/MostrarProducto';
import Registro from './componentes/registro';
import Login from './componentes/login';

/*


BrowserRouter, Link, Switch, 

  
 */

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/producto/:id" element={<MostrarProducto/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>  
    </>
  );
}


export default App;
