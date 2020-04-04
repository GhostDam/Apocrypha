import React from 'react'
import Muro from './muro'
import AlfabetoDragon from './alfabetoDragon'
import api from '../api' 

class NewWall extends React.Component{
    state={
        form:{
            nombre:'',
            grito:'',
            l1dovah:'',
            l1español:'',
            l2dovah:'',
            l2español:'',
            l3dovah:'',
            l3español:'',
            l4dovah:'',
            l4español:'',
        },
        verAlfabeto:false,
        verPrevio: false
   }

    onChange = (e) =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value   
            }
        })
    }

    handleClick = async (e) =>{
      e.preventDefault()
         try {
            await api.walls.create(this.state.form)
            console.log(this.state.form)
            alert('success')   
         } catch (error) {
            console.log(error)
            alert(error)
         }
   } 

   verAlfa = () =>{
      this.setState({
         verAlfabeto: !this.state.verAlfabeto
      })
   }

   verPrev = () =>{
      this.setState({
         verPrevio: !this.state.verPrevio
      })
   }

    render(){
        return(
      <React.Fragment>
            <div className={this.state.verAlfabeto ? "left_in fade_in info" : "left_in" } onClick={this.verAlfa}>
               <AlfabetoDragon />
            </div>
            <div className={this.state.verPrevio ? "right_in fade_in info" : "right_in" } onClick={this.verPrev}>
               <Muro 
                     nombre={this.state.form.nombre || "Nombre del muro"}
                     grito={this.state.form.grito || "Grito"}
                     español1={this.state.form.l1español}
                     dovah1={this.state.form.l1dovah}
                     español2={this.state.form.l2español}
                     dovah2={this.state.form.l2dovah}
                     español3={this.state.form.l3español}
                     dovah3={this.state.form.l3dovah}
                     español4={this.state.form.l4español}
                     dovah4={this.state.form.l4dovah}
               />
            </div>
                     <button className="button_fade_left" onClick={this.verAlfa}>
                     </button>
                     <button className="button_fade_right" onClick={this.verPrev}>                           
                     </button>

                    <form id='agregar_muro' autoComplete='off'>
                     <div className="form-grioup">
                        <h3>Nuevo muro</h3>
                     </div>
                     <div className='form-group'>
                           <label>Nombre</label>
                           <input onChange={this.onChange} className='form-control' type='text' name='nombre' value={this.state.form.nombre}/> 
                        </div>
                        <div className='form-group'>
                           <label>Grito</label>
                           <input onChange={this.onChange} className='form-control' type='text' name='grito' value={this.state.form.grito}/>
                        </div>
                        <div className='form-group'>
                           <label>l1 Dovah</label>
                           <input onChange={this.onChange} className='form-control' type='l1dovah' name='l1dovah' value={this.state.form.l1dovah}/>
                        </div>
                        <div className='form-group'>
                           <label>L1 Español</label>
                           <input onChange={this.onChange} className='form-control' type='text' name='l1español'value={this.state.form.l1español}/>
                        </div>

                        <div className='form-group'>
                           <label>l2 Dovah</label>
                           <input onChange={this.onChange} className='form-control' type='l1dovah' name='l2dovah' value={this.state.form.l2dovah}/>
                        </div>
                        <div className='form-group'>
                           <label>L2 Español</label>
                           <input onChange={this.onChange} className='form-control' type='text' name='l2español'value={this.state.form.l2español}/>
                        </div>
                        <div className='form-group'>
                           <label>l3 Dovah</label>
                           <input onChange={this.onChange} className='form-control' type='l1dovah' name='l3dovah' value={this.state.form.l3dovah}/>
                        </div>
                        <div className='form-group'>
                           <label>L3 Español</label>
                           <input onChange={this.onChange} className='form-control' type='text' name='l3español'value={this.state.form.l3español}/>
                        </div>
                        <div className='form-group'>
                           <label>l4 Dovah</label>
                           <input onChange={this.onChange} className='form-control' type='l1dovah' name='l4dovah' value={this.state.form.l4dovah}/>
                        </div>
                        <div className='form-group'>
                           <label>L4 Español</label>
                           <input onChange={this.onChange} className='form-control' type='text' name='l4español'value={this.state.form.l4español}/>
                        </div>
                        <div className='form-group'>
                           <button  onClick={this.handleClick} className='btn btn-primary float-right'>Guardar</button>
                        </div>
                     </form>
        </React.Fragment>//close component tag
        )
    }
}

export default NewWall