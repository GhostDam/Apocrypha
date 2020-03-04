import React from 'react'

const data = require("../data/db.json")

function ListaIngredientes (){
    const ingredientes = data.ingredients

    const [value, setValue] = React.useState('')

    const respuestaFiltrada= ingredientes.filter(ingrediente => {
            return `${ingrediente.ingrediente}${ingrediente.efecto1}${ingrediente.efecto2}${ingrediente.efecto3}${ingrediente.efecto4}${ingrediente.detalles}`.toLowerCase().includes(value.toLowerCase())   
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
                <div className='row text-center bg-primary'>
                    <div className="col-4">
                        ingrediente
                    </div>
                    <div className="col-4">
                        efectos
                    </div>
                    <div className="col-4">
                        detalles
                    </div>
                </div>
                <div className='ingredientes text-center'>
                    {value !== "" ? respuestaFiltrada.map((ingrediente)=>(
                       <div key={ingrediente.ingrediente} className="row bg-secondary mb-2"> 
                        <div className="col-4">
                            {ingrediente.ingrediente}<br/>
                            Valor: {ingrediente.valor}<br/>
                            Peso: {ingrediente.peso}<br/>
                        </div>
                        <div className="col-4 row">
                            <div className="col-md-6">{ingrediente.efecto1}</div>
                            <div className="col-md-6">{ingrediente.efecto2}</div>
                            <div className="col-md-6">{ingrediente.efecto3}</div>
                            <div className="col-md-6">{ingrediente.efecto4}</div>
                        </div>
                        <div className="col-4">
                            <p>{ingrediente.detalles}</p>
                        </div>
                        </div>
                    )) : ""}
                </div>
            </div>
        )
}

export default ListaIngredientes