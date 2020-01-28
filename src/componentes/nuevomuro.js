import React from 'react'
import Muro from './muro'
import AlfabetoDragon from './alfabetoDragon'

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

    handleClick = (e) =>{
      e.preventDefault()
      const fs = require('fs');
      const content = JSON.stringify({
      "id": "id",
         "nombre": this.state.form.nombre,
         "grito": this.state.form.nombre,
         "ubicacion": "placeholder",
         "linea1": {
                     "dovah": this.state.form.l1dovah,
                     "español": this.state.form.l1español
                  },
         "linea2": {
                     "dovah": this.state.form.l2dovah,
                     "español": this.state.form.l2español
                  },
         "linea3": {
                     "dovah": this.state.form.l3dovah,
                     "español": this.state.form.l3español
                  },
         "linea4": {
                     "dovah": this.state.form.l4dovah,
                     "español": this.state.form.l4español
               }
            });

      fs.writeFile('../data/usual.json', content, 'utf8', function (err) {
            if (err) {
               return console.log(err);
            }
            // console.log("The file was saved!");
         }); 
    } 

    render(){
        return(
            <div className='row'>
            <AlfabetoDragon />
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
               <button  onClick={this.handleClick} className='btn btn-primary'>Guardar</button>
        </form>
        <div className='col-sm-6'>
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
        </div>
        )
    }
}

export default NewWall