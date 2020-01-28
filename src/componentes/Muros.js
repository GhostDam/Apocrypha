import React from 'react'
import Muro from './muro'

const muros= require('../data/walls.json')

class Muros extends React.Component {
    render(){
        return(<React.Fragment>
                <h1>Listado de muros</h1>
                {muros.map((muro) => (
                    <Muro key={muro.id}
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
                ))}
            </React.Fragment>
            )
    }
}

export default Muros