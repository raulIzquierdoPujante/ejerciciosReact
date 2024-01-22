import Ciudad from './assets/EJERCICIOS/AVANZADO/Fuentes/EJ3/Ciudad';

import { Route } from "wouter";
import ReactDOM from 'react-dom';

import Menu from './assets/EJERCICIOS/AVANZADO/Fuentes/EJ3/Menu/Menu';
import Home from './assets/EJERCICIOS/AVANZADO/Fuentes/EJ3/Home';
import rm from './assets/EJERCICIOS/AVANZADO/Fuentes/EJ3/mock-rm';
import { useState } from 'react';

function App() {
  return (
    <div>
    <Menu></Menu>
      <Route path="/" component={Home}></Route>
      <Route path="/:ciudad" component={Ciudad}> </Route>      
    </div>
  );
}

export default App;
