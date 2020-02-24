import React from 'react'
import api from '../api'

// const data = require('../data/db.json')
// const potions = data.potions;
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
                    <label>Busqueda de pociones</label>
                    <input className='form-control'
                    value={query}
                    onChange={(e)=>{setQuery(e.target.value)}}
                    />
                </div>
                <div className='row info'>
                {pocionFiltrada.map(pocion =>(
                    <div key={pocion.id} className='row col-md-6'>
                        <div className='col-md-6'>
                            <p> Descripcion de pocion <br/>
                            {pocion.pocion} <br/>
                            valor: {pocion.valor}
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <p>ingredientes usados <br/>
                            {pocion.ingrediente1} <br/>
                            {pocion.ingrediente2} <br/>
                            {pocion.ingrediente3} <br/>
                            {pocion.efecto4} <br/>
                            </p>
                        </div>
                    </div>
    ))}
                </div>
            </div>
        )
}

export default ListaPociones