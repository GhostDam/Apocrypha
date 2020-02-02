import React from 'react'
import api from '../api'
class ListaPociones extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pociones:[]
        }
    }
    
    componentDidMount(){
        this.fetchData();
    }
    fetchData = async () =>{
        try {
            const data = await api.potions.list()           
            this.setState({pociones:data})
        } catch (error) {
            console.log(error)       
        }
    }

    mapPotions(){
    const    potion =this.state.pociones.sort((a,b)=> a.size > b.size )
    return(
            potion.map((pocion)=>(
                <div key={pocion.id} className='col-md-3 info '>
            <p>{pocion.pocion}
               {pocion.ingrediente1} <br/>
               {pocion.ingrediente2} <br/>
               {pocion.ingrediente3} <br/>
               {pocion.efecto4} <br/>
               {pocion.valor}</p>
            </div>
            ))
        )
    }

    render(){
        return(
            <div>
                <h1>Lista de Pociones</h1>
                <div className='row'>
                {this.mapPotions()}
                </div>
            </div>
        )
    }
}

export default ListaPociones