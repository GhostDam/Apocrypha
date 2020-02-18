import React from 'react'
import {Link} from 'react-router-dom'

import Fauna from './faunadb'
import Muro from './muro'

class Muros extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      muros: []
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () =>{
    try {
      const res = await Fauna.data.get();
      this.setState({muros: res.data})
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  borrar = (ref) =>{
    if (window.confirm('borrar?')) {
      try {
      const conf = Fauna.data.delete(ref)
      console.log(conf)
    } catch (error) {
        console.log(error)
    }
    }else{
        console.log('cancelos')
    }
  }

  enlistador = () =>{
      console.log(this.state.muros.length )
        if (this.state.muros.length >=1 ) {
            return(
            this.state.muros.map((muro)=>(
                <div key={muro.ts}>
                <Muro nombre={muro.data.nombre}
                        grito={muro.data.grito}
                        ubicacion={muro.data.ubicacion}
                        español1={muro.data.linea1.español}
                        dovah1={muro.data.linea1.dovah}
                        español2={muro.data.linea2.español}
                        dovah2={muro.data.linea2.dovah}
                        español3={muro.data.linea3.español}
                        dovah3={muro.data.linea3.dovah}
                        español4={muro.data.linea4.español}
                        dovah4={muro.data.linea4.dovah}
                />
                <button className='deleter btn btn-danger' onClick={()=>this.borrar(muro.ref.id)}>Borrar ref {muro.ref.id}</button>
                <Link to={`/muros/${muro.ref.id}/editar`}>Editar ref {muro.ref.id}</Link>
            </div>
            ))
            )        
        }else{
            return(<h1>No hay muros disponibles</h1>)
        }
    }

  render(){
        return(<React.Fragment>
                <h1>Listado de muros</h1>
                <div className='col-md-9 mx-auto'>
                {this.enlistador()}
                </div>
            </React.Fragment>
            )
    }
}

export default Muros