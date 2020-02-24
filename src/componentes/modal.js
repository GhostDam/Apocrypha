import React from 'react'
import api from '../api'


const Modal = () =>{
    const [dov, setDov] = React.useState('')
    const [esp, setEsp] = React.useState('')
    const data = {
        "dovah": dov,
        "español": esp
    }
const send = async ()=>{
    try {
        await api.words.write(data)
        alert('done')
    } catch (error) {
        console.log(error)
    }
}
    return (
    <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Words</button>
    
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
                <label htmlFor="recipient-name" className="col-form-label">Dovah:</label>
                <input type="text" className="form-control" id="recipient-name" onChange={(e)=>(setDov(e.target.value))} />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">Español:</label>
                <textarea className="form-control" id="message-text" onChange={(e)=>(setEsp(e.target.value))}/>
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

export default Modal