import React from 'react'
import api from '../api'

import ModalPotions from './modalPotion'

var potions = []
const getPotions = async () =>{
    try {
        const data = await api.potions.list()
        potions = await data
    } catch (error) {
        if (error) {
            const data = require('../data/db.json')
            potions = data.potions;
        }
    }
}
getPotions()

function useSearchList(potions){
    const [query, setQuery] = React.useState('')    
    const  [pocionFiltrada, setpocionFiltrada] = React.useState(potions)

    React.useMemo(()=>{
        const filtro = potions.filter((poti)=>{
            return `${poti.pocion}${poti.ingrediente1}${poti.ingrediente2}${poti.ingrediente3}`.toLowerCase().includes(query.toLowerCase())
        })
        setpocionFiltrada(filtro)
    }, [potions, query])

    return [query, setQuery, pocionFiltrada]
}

function ListaPociones () {
    const [query, setQuery, pocionFiltrada] = useSearchList(potions)

    return(
            <div>
                <h1>Lista de Pociones</h1>
                <div className='form-group'>
                    <div className='d-flex justify-content-between'>
                        <label>Busqueda</label> <ModalPotions />
                    </div> 
                    <input className='form-control'
                    value={query}
                    onChange={(e)=>{setQuery(e.target.value)}}
                    />
                </div>
                <div className='row'>
                    
                {pocionFiltrada.sort((a,b)=>a.valor-b.valor).map(pocion =>(
                    <div key={pocion.id} className='row col-md-6 border border-secondary info'>
                        <div className='col-md-6'>
                            <p><strong>Descripcion de pocion</strong></p>
                            <p>{pocion.pocion} </p>
                            <p><strong>valor: {pocion.valor}</strong></p>
                        </div>
                        <div className='col-md-6'>
                            <p><strong>ingredientes usados</strong></p>
                            <p>{pocion.ingrediente1}</p>
                            <p>{pocion.ingrediente2}</p>
                            <p>{pocion.ingrediente3}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        )
}

export default ListaPociones