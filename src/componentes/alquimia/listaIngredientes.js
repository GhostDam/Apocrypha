import React from 'react'

const data = require("../../data/db.json")

function ListaIngredientes (){
    const ingredientes = data.ingredients

    const [value, setValue] = React.useState('')

    const respuestaFiltrada= ingredientes.filter(ingrediente => {
            return `${ingrediente.ingrediente}${ingrediente.efecto1}${ingrediente.efecto2}${ingrediente.efecto3}${ingrediente.efecto4}${ingrediente.detalles}`.toLowerCase().includes(value.toLowerCase())   
    })

    // const totalEfectos = ingredientes.reduce((acum, ingredient)=>{
    //         return acum + ingredient.efecto1
    // }, [])
    // console.log(totalEfectos)

    return(
            <div>
                <h1>Lista de ingredientes</h1>
                <div className="searcher">
                <div className="search_label">
                    <label>Busqueda de efectos</label>
                    <input className='form-control'
                    value={value}
                    onChange={(e)=>{setValue(e.target.value)}}
                    />
                </div>
                <div className='search_result'>
                    {value !== "" ? respuestaFiltrada.map((ingrediente)=>(
                       <div key={ingrediente.ingrediente} className={`ingredient info extra-${ingrediente.detalles}`}> 
                            <div className="nombre">
                                <p>{ingrediente.ingrediente}</p>
                                <p>Valor: {ingrediente.valor}</p>
                                <p>Peso: {ingrediente.peso}</p>
                            </div>
                            <div className="efectos">
                                <p>{ingrediente.efecto1}</p>
                                <p>{ingrediente.efecto2}</p>
                                <p>{ingrediente.efecto3}</p>
                                <p>{ingrediente.efecto4}</p>
                            </div>
                        </div>
                    )) : ""}
                </div>
                </div>
            </div>
        )
}

export default ListaIngredientes