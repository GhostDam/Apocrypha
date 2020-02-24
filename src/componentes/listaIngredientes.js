import React from 'react'

const data = require("../data/db.json")

function ListaIngredientes (){
    const ingredientes = data.ingredients

    const [value, setValue] = React.useState('')

    const respuestaFiltrada= ingredientes.filter(ingrediente => {
            return `${ingrediente.ingrediente}${ingrediente.efecto1}${ingrediente.efecto2}${ingrediente.efecto3}${ingrediente.efecto4}`.toLowerCase().includes(value.toLowerCase())   
    })
    return(
            <div>
                <h1>Lista de ingredientes</h1>
                <div className="form-group">
                    <label>Busqueda de efectos</label>
                    <input className='form-control'
                    value={value}
                    onChange={(e)=>{setValue(e.target.value)}}
                    />
                </div>
                <div className='row ingredientes'>
                    {respuestaFiltrada.map((ingrediente)=>(
                    <div key={ingrediente.ingrediente} className='col-md-12 pb-2 info item'>
                        <div className="id">{ingrediente.ingrediente}</div>
                        <div className="f1">{ingrediente.efecto1}</div>
                        <div className="f2">{ingrediente.efecto2}</div>
                        <div className="f3">{ingrediente.efecto3}</div>
                        <div className="f4">{ingrediente.efecto4}</div>
                     <p>Valor: {ingrediente.valor} Peso: {ingrediente.peso}</p>
                    </div>
                    ))}
                </div>
            </div>
        )
}

export default ListaIngredientes