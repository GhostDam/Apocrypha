import React from 'react'
import image from './media/dael.png'
import {Link} from 'react-router-dom'

import Fauna from './faunadb'
import Muro from './muro'

class AlfabetoDaedra extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     muros: []
  //   }
  // }

  // componentDidMount(){
  //   this.fetchData();
  // }

  // fetchData = async () =>{
  //   try {
  //     const res = await Fauna.data.get();
  //     this.setState({muros: res.data})
  //     console.log(res.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // borrar = (ref) =>{
  //   if (window.confirm('borrar?')) {
  //     try {
  //     const conf = Fauna.data.delete(ref)
  //       console.log(conf)
  //   } catch (error) {
  //     console.log(error)
  //     }
  //   }else{
  //     console.log('cancelos')
  //   }
  // }

  // enlistador = () =>{
  //   return(
  //     this.state.muros.map((muro)=>(
  //       <div key={muro.ts}>
  //       {console.log(muro.ts)}
  //         <Muro nombre={muro.data.nombre}
  //               grito={muro.data.grito}
  //               ubicacion={muro.data.ubicacion}
  //               español1={muro.data.linea1.español}
  //               dovah1={muro.data.linea1.dovah}
  //               español2={muro.data.linea2.español}
  //               dovah2={muro.data.linea2.dovah}
  //               español3={muro.data.linea3.español}
  //               dovah3={muro.data.linea3.dovah}
  //               español4={muro.data.linea4.español}
  //               dovah4={muro.data.linea4.dovah}
  //       />
  //       <button className='deleter' onClick={()=>this.borrar(muro.ref.id)}>Borrar ref {muro.ref.id}</button>
  //       <Link to={`/muros/${muro.ref.id}/editar`}>Editar ref {muro.ref.id}</Link>

  //     </div>
  //     ))
  //     )
  //   }

  render(){
      return(<React.Fragment>
          <div className='headerAlfabeto mx-auto'>
          <div>
            <img src={image} alt='daedra'/>
          </div>
          <h1>Daedra</h1>
          <div className='espejo'>
            <img src={image} alt='daedra' />
          </div>
        </div>
        <div className="alfabeto">
            <div>
            <p>A</p><img src={require("./daedra/a.svg")} alt="a" />
            </div>
            <div>
            <p>B</p><img src={require("./daedra/b.svg")} alt="" />
            </div>
            <div>
            <p>D</p><img src={require("./daedra/d.svg")} alt="" />
            </div>
            <div>
            <p>E</p><img src={require("./daedra/e.svg")} alt="" />
            </div>
            <div>
            <p>F</p><img src={require("./daedra/f.svg")} alt="" />
            </div>
            <div>
            <p>G</p><img src={require("./daedra/g.svg")} alt="" />
            </div>
            <div>
            <p>H</p><img src={require("./daedra/h.svg")} alt="" />
            </div>
            <div>
            <p>I</p><img src={require("./daedra/i.svg")} alt="" />
            </div>
            <div>
            <p>J</p><img src={require("./daedra/j.svg")} alt="" />
            </div>
            <div>
            <p>K</p><img src={require("./daedra/k.svg")} alt="" />
            </div>
            <div>
            <p>L</p><img src={require("./daedra/l.svg")} alt="" />
            </div>
            <div>
            <p>M</p><img src={require("./daedra/m.svg")} alt="" />
            </div>
            <div>
            <p>N</p><img src={require("./daedra/n.svg")} alt="" />
            </div>
            <div>
            <p>O</p><img src={require("./daedra/o.svg")} alt="" />
            </div>
            <div>
            <p>P</p><img src={require("./daedra/p.svg")} alt="" />
            </div>
            <div>
            <p>Q</p><img src={require("./daedra/q.svg")} alt="" />
            </div>
            <div>
            <p>R</p><img src={require("./daedra/r.svg")} alt="" />
            </div>
            <div>
            <p>S</p><img src={require("./daedra/s.svg")} alt="" />
            </div>
            <div>
            <p>T</p><img src={require("./daedra/t.svg")} alt="" />
            </div>
            <div>
            <p>U</p><img src={require("./daedra/u.svg")} alt="" />
            </div>
            <div>
            <p>V</p><img src={require("./daedra/v.svg")} alt="" />
            </div>
            <div>
            <p>W</p><img src={require("./daedra/w.svg")} alt="" />
            </div>
            <div>
            <p>X</p><img src={require("./daedra/x.svg")} alt="" />
            </div>
            <div>
            <p>Y</p><img src={require("./daedra/y.svg")} alt="" />
            </div>
            <div>
            <p>Z</p><img src={require("./daedra/z.svg")} alt="" />
            </div>
          </div>
        {/* {this.enlistador()} */}
        </React.Fragment>
      )
  }  
}

export default AlfabetoDaedra