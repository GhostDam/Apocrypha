import React from 'react'
import AlfabetoDragon from './alfabetoDragon'

const  words= require('../data/languaje.json')

function useSearchWords(words){
    //tomar valor de input usando hooks
    const [value, setValue] = React.useState('')
    //React useMemo
    const [palabrasBuscadas, setPalabrasBuscadas] = React.useState(words)


    //lo mismo pero mas complejo
    React.useMemo(() => {
    const resultado = words.filter(word =>{
            return `${word.dovah}${word.español}`.toLowerCase().includes(value.toLowerCase())
        })
        setPalabrasBuscadas(resultado)
    },[words, value]
    )
    //lo mismo pero mas complejo

    return [value, setValue, palabrasBuscadas]
}

function LenguajeDragon(props){
    const [value, setValue, palabrasBuscadas] = useSearchWords(words)

    // //funcional pero pesado
    // const palabrasBuscadas = words.filter(word =>{
    //     return `${word.dovah}${word.español}`.toLowerCase().includes(value.toLowerCase())
    // })
    // //funcional pero pesado

    return (
        <div className='textfinder'>
            <AlfabetoDragon />
            <div><label>Busqueda</label>
            <input 
                className='form-control'
                value={value}
                onChange={(e)=>{
                    setValue(e.target.value)
                }
                }/>
            </div>
            {palabrasBuscadas.map((palabra, index) => (
                <div key={index} className='d-flex justify-content-around info'>
                <p>{palabra.dovah}</p>
                <p> {palabra.español}</p>
                </div>
                ))}
        </div>
    )    
}

export default LenguajeDragon

// class Dragon extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             words: require('../data/languaje.json')
//         }
//     }
//     //tomar valor de input usando hooks
//     filterWords(params) {
//         const [valor, setValor] = React.useState('')
//     }

//     mapeado = () =>(
//         this.state.words.map((palabra, index) => (
//             <div key={index}><label>{index} </label><label>{palabra.dovah}</label><label> {palabra.español}</label></div>
//         ))
//     )    
//     handleChange(e){
//         console.log(e.target.value)
//     }

//     render(){
//         return (
//             <div>
//                 <h1>Dragon</h1>
//                 <div><label>Busqueda</label><input onChange={this.handleChange}></input></div>
//                 {this.mapeado()}            
//             </div>
//         )    
//     }
// }

// export default Dragon