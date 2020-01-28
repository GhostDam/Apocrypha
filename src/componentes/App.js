import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Muros from './Muros'
import Navbar from './Navbar'
import NewWall from './nuevomuro'
import LenguajeDragon from './Dragon'
import AlfabetoDaedra from './alfabetoDaedra'
import AlfabetoDragon from './alfabetoDragon'
import ListaIngredientes from './listaIngredientes'
import ListaPociones from './listaPociones'

const App =() => (
  <BrowserRouter>
    <Navbar />
    <div className='container'>
      <Route exact path ='/' component={LenguajeDragon} />
      <Route exact path ='/muros' component={Muros} />
      <Route exact path ='/nuevo_muro' component={NewWall} />
      <Route exact path ='/alfabeto/daedra' component={AlfabetoDaedra} />
      <Route exact path ='/alfabeto/dragon' component={AlfabetoDragon} />
      <Route exact path ='/alquimia' component={ListaIngredientes} />
      <Route exact path ='/pociones' component={ListaPociones} />
    </div>
  </BrowserRouter>
)

export default App;
