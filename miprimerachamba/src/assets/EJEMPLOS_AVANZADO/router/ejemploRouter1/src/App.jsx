import './App.css';
import Contador from './componentes/Contador';
import Nosotros from './componentes/Nosotros';
import Bienvenido from './componentes/Bienvenido';
import Menu from './componentes/Menu';
import Home from './componentes/Home';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      
    <Menu></Menu>

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/users/:name" element={<Bienvenido></Bienvenido>}> </Route>      
      <Route path="/inbox"  element={<Contador></Contador>}></Route>
      <Route path="/about"  element={<Nosotros></Nosotros>}> </Route>
    </Routes>
    </div>
  );
}

export default App;
