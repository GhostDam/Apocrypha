import React from 'react'
import api from '../../api'


const ModalPotions = () =>{
    const [form, setForm] = React.useState({
        pocion:"",
        ingrediente1:"",
        ingrediente2:"",
        ingrediente3:"",
        valor:"",
        efecto: ""
    })

    const fillform = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
      }
    
    const send = async ()=>{
            console.log(form)
        try {
            await api.potions.create(form)
            alert('done')
            } catch (error) {
            console.log(error)
        }
    }
    return (
    <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add potions</button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Agregar palabra</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form autoComplete='off'>
              <div className="form-group">
                <label htmlFor="pocion" className="col-form-label">Descripcion de pocion:</label>
                <input type="text" className="form-control" value={form.pocion} name="pocion" onChange={fillform} />
              </div>
              <div className="form-group">
                <label htmlFor="ingrediente1" className="col-form-label">ingrediente 1:</label>
                <input type="text" className="form-control" value={form.ingrediente1} name="ingrediente1" onChange={fillform} />
              </div>
              <div className="form-group">
                <label htmlFor="ingrediente2" className="col-form-label">ingrediente 2:</label>
                <input type="text" className="form-control" value={form.ingrediente2} name="ingrediente2" onChange={fillform} />
              </div>
              <div className="form-group">
                <label htmlFor="ingrediente3" className="col-form-label">ingrediente 3:</label>
                <input type="text" className="form-control" value={form.ingrediente3} name="ingrediente3" onChange={fillform} />
              </div>
              <div className="form-group">
                <label htmlFor="valor" className="col-form-label">valor:</label>
                <input type="text" className="form-control" value={form.valor} name="valor" onChange={fillform} />
              </div>
              <div className="form-group">
                <label htmlFor="efecto" className="col-form-label">Efecto:</label>
                <select className="form-control" name="efecto" id="efecto" onChange={fillform}>
                  <option>Selecciona el tipo de poción</option>
                  <option value="daño">Daño</option>
                  <option value="magia">Magia</option>
                  <option value="salud">Salud</option>
                </select>
                {/* <input type="text" className="form-control" value={form.valor} name="valor" onChange={fillform} /> */}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={send}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}

export default ModalPotions