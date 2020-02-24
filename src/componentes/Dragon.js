import React from 'react'
import api from '../api'

import Modal from './modal'

// const  words= require('../data/languaje.json')   
//useEffect
var words = []
const fetchWords= async () =>{
try {
        const data = await api.words.list()
        words = await data
    } catch (error) {
        if(error){
            const data = require('../data/db.json')
            words = data.words
        }

    }
}


function useSearchWords(words){
    //tomar valor de input usando hooks
    const [value, setValue] = React.useState('')
    //React useMemo
    const [palabrasBuscadas, setPalabrasBuscadas] = React.useState(words)

    React.useMemo(() => {
        const resultado = words.filter(word =>{
                                return `${word.dovah}${word.español}`.toLowerCase().includes(value.toLowerCase())
                                        })
        setPalabrasBuscadas(resultado)
        },[words, value]
    )
    return [value, setValue, palabrasBuscadas]
}

fetchWords()
function LenguajeDragon(props){    
    const [value, setValue, palabrasBuscadas] = useSearchWords(words)
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <label>Busqueda</label> <Modal />
            </div> 
                <input className='form-control' value={value}  onChange={(e)=>{setValue(e.target.value)}}/>
                {palabrasBuscadas.map((palabra, index) => (
                <div key={index} className='d-flex justify-content-around info'>
                    <p>{palabra.dovah}</p>
                    <p>{palabra.español}</p>
                </div>
            ))}
        </div>
    )    
}

export default LenguajeDragon

// class LenguajeDragon extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             words: []
//         }
//     }
//     componentDidMount(){
//     this.fetchData()
//     }
//     fetchData = async () =>{
//         try {
//            const data = await api.words.list()
//             this.setState({words:data})
//            console.log(data)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     //tomar valor de input usando hooks
//     filterWords(params) {
//         const [valor, setValor] = React.useState('')
//     }

//     mapeado = () =>(
//         this.state.words.map((palabra, index) => (
//                   <div key={index} className='d-flex justify-content-around info'>
//                     <p>{palabra.dovah}</p>
//                     <p> {palabra.español}</p>
//                   </div>
//         ))
//     )    
//     handleChange(e){
//             var updatedList = this.state.words;
//                 updatedList = updatedList.filter(function(item){
//                 return item.toLowerCase().search(
//                     e.target.value.toLowerCase()) !== -1;
//                 });
//                 this.setState({words: updatedList});
            
//         // console.log(e.target.value)
//     }

//     render(){
//         return (
//             <div>
//                 <h1>Dragon</h1>
//                 <div className='form-group'>
//                     <label>Busqueda</label>
//                     <input onChange={(e)=>{
//                                         setValue(e.target.value)
//                                         }} className='form-control'>
//                     </input>
//                 </div>
//                 {this.mapeado()}            
//             </div>
//         )    
//     }
// }

// export default LenguajeDragon