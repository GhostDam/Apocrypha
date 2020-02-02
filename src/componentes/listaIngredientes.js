import React from 'react'

class ListaIngredientes extends React.Component{
    ingredientes = require("../data/ingredients.json")
    render(){
        return(
            <div>
                <h1>Lista de ingredientes</h1>
                <div className='row'>
                    {this.ingredientes.map((ingrediente)=>(
                    <div key={ingrediente.id} className='col-md-3 pb-2 info'>
                     <p>{ingrediente.id} <br/>
                       {ingrediente.efecto1} <br/>
                       {ingrediente.efecto2} <br/>
                       {ingrediente.efecto3} <br/>
                       {ingrediente.efecto4} <br/>
                        Valor: {ingrediente.valor} <br/>    
                        Peso: {ingrediente.peso}</p>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ListaIngredientes