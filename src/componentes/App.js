import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Muros from './Muros'
import Navbar from './Navbar'
import NewWall from './nuevomuro'
import EditWall from './editarmuro'

import LenguajeDragon from './Dragon'
import AlfabetoDaedra from './alfabetoDaedra'
import AlfabetoDragon from './alfabetoDragon'
import ListaIngredientes from './listaIngredientes'
import ListaPociones from './listaPociones'

import Modelos from './modelos'
import Selector from './selector'

import Aranhas from './aranhas'
const App =() => (
  <BrowserRouter>
    <Navbar />
    <div className='container overflow-auto '>
      <Route exact path ='/' component={LenguajeDragon} />
      <Route exact path ='/muros' component={Muros} />
      <Route exact path ='/muros/:id/editar' component={EditWall} />
      <Route exact path ='/nuevo_muro' component={NewWall} />
      <Route exact path ='/alfabeto/daedra' component={AlfabetoDaedra} />
      <Route exact path ='/alfabeto/dragon' component={AlfabetoDragon} />
      <Route exact path ='/alquimia' component={ListaIngredientes} />
      <Route exact path ='/pociones' component={ListaPociones} />
      <Route exact path ='/artesanias/aranas' component={Aranhas} />
      <Route exact path ='/artesanias/modelos/' component={Selector} />
      <Route exact path ='/artesanias/modelos/:model' component={Modelos} />

    </div>
  </BrowserRouter>
)

export default App;
