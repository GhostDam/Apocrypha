import React from 'react'
import {Link} from 'react-router-dom'

import Muro from './muro'
import api from '../api'


class Muros extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            muros: []
        }
    }
  componentDidMount(){
        this.fetchData()
    }

  fetchData = async () => {
     try{
        const data = await api.walls.list();  
        this.setState({muros:data})
     } catch(error){
        console.log(error)
        if(error){
            var data = require('../data/walls.json')
            this.setState({muros:data})
        }
    }
  } 

  deleteWall = async (idtoDelete) => {
            console.log(idtoDelete)
        try{
            await api.walls.remove(idtoDelete);  
                alert('borrado')
                this.fetchData();
            } catch(error){
            console.log(error)
        }
    } 

  listarMuros = (muros) =>{
    return (   muros.map((muro) => (
            <React.Fragment key={muro.id}>
           <Muro 
            nombre={muro.nombre}
            grito={muro.grito}
            ubicacion={muro.ubicacion}
            español1={muro.linea1.español}
            dovah1={muro.linea1.dovah}
            español2={muro.linea2.español}
            dovah2={muro.linea2.dovah}
            español3={muro.linea3.español}
            dovah3={muro.linea3.dovah}
            español4={muro.linea4.español}
            dovah4={muro.linea4.dovah}
            />
            <div>
                <button className='btn btn-danger mr-2' onClick={() =>this.deleteWall(muro.id)}>Borrar {muro.id}</button>
                <Link to={`muros/${muro.id}/editar`}><button className='btn btn-primary'>Editar</button></Link>
            </div>
            </React.Fragment>
            ))) 
  }

  render(){
        return(<React.Fragment>
                <h1>Listado de muros</h1>
                <div className='col-md-9 mx-auto'>
                {this.listarMuros(this.state.muros)}
                </div>
            </React.Fragment>
            )
    }
}

export default Muros