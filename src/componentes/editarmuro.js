import React from 'react'
import Muro from './muro'
import api from '../api'

import LenguajeDragon from './Dragon'

class EditWall extends React.Component{
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
        }
}

    onChange = (e) =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value   
            }
        })
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        try {
        const data = await api.walls.read(this.props.match.params.id)
            console.log(data)
            console.log(this.state.form)
            this.setState({
                form:{
                        nombre:data.nombre,
                        grito:data.grito,
                        l1dovah:data.linea1.dovah,
                        l1español:data.linea1.español,
                        l2dovah:data.linea2.dovah,
                        l2español:data.linea2.español,
                        l3dovah:data.linea3.dovah,
                        l3español:data.linea3.español,
                        l4dovah:data.linea4.dovah,
                        l4español:data.linea4.español,           
                    }
            })
        } catch (error) {
            console.log(error) 
        }        
    }
    handleClick = async (e) =>{
      e.preventDefault()
         try {
            await api.walls.update(this.props.match.params.id, this.state.form)
            alert('Edited')   
         } catch (error) {
            console.log(error)
            alert(error)
         }
   } 

    render(){
        return(
            <div className='row'>
            <form className='col-sm-6' autoComplete='off'>
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
               <button  onClick={this.handleClick} className='btn btn-primary'>Editar</button>
        </form>
        <div className='col-sm-6'>
            <LenguajeDragon />
        </div>
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
        )
    }
}

export default EditWall