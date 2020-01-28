import React from 'react'

class ListaIngredientes extends React.Component{
    ingredientes = require("../data/ingredients.json")
    render(){
        return(
            <div>
                <h1>Lista de ingredientes</h1>
                <div className='row'>
                    {this.ingredientes.map((ingrediente)=>(
                    <div className='col-md-3'>
                    {ingrediente.id}
                    <p>{ingrediente.efecto1} <br/>
                       {ingrediente.efecto2} <br/>
                       {ingrediente.efecto3} <br/>
                       {ingrediente.efecto4} <br/>
                       {ingrediente.valor} <br/>    
                       {ingrediente.peso}</p>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ListaIngredientes