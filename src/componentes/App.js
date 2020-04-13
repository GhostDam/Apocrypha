import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NotFound from './notfound'
import Muros from './muros/Muros'
import Navbar from './Navbar'
import NewWall from './muros/nuevomuro'
import EditWall from './muros/editarmuro'

import LenguajeDragon from './Dragon'
import AlfabetoDaedra from './alfabetos/alfabetoDaedra'
import AlfabetoDragon from './alfabetos/alfabetoDragon'

import Info from './alquimiaInfo'
import ListaIngredientes from './listaIngredientes'
import ListaPociones from './listaPociones'

import SelectorAr from './visorModelos/selectorAr'

import Fragua from './Fragua'
import Aranhas from './aranas/aranhas'

const App =() => (
  <BrowserRouter>
    <Navbar />
    <div className='container'>
      <Switch>
      <Route exact path ='/' component={LenguajeDragon} />
      <Route exact path ='/muros' component={Muros} />
      <Route exact path ='/muros/:id/editar' component={EditWall} />
      <Route exact path ='/nuevo_muro' component={NewWall} />
      <Route exact path ='/alfabeto/daedra' component={AlfabetoDaedra} />
      <Route exact path ='/alfabeto/dragon' component={AlfabetoDragon} />

      <Route exact path ='/alquimia' component={Info} />
      <Route exact path ='/ingredientes' component={ListaIngredientes} />
      <Route exact path ='/pociones' component={ListaPociones} />

      <Route exact path ='/artesanias/aranas' component={Aranhas} />
      <Route exact path ='/artesanias/modelos/' component={SelectorAr} />
      <Route exact path ='/artesanias/fragua/' component={Fragua} />
      <Route component={NotFound}/>  
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
