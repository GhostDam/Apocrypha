import React from 'react'
import image from './media/dagl.png'
import './alfabeto.css'

class AlfabetoDragon extends React.Component{
  render(){
      return(<React.Fragment>
       <div>
        <div className='headerAlfabeto'>
          <div>
            <img src={image} alt='dragon'/> 
          </div>
          <h1>Dragon</h1>
          <div className='espejo'>
            <img src={image} alt='dragon'/>
          </div>
        </div>
        <div className="alfabeto">
            <div>
            <p>A</p><img src={require("./dragon/a.svg")} alt="a" />
            </div>
            <div>
            <p>AA</p><img src={require("./dragon/a2.svg")} alt="" />
            </div>
            <div>
            <p>AH</p><img src={require("./dragon/a3.svg")} alt="" />
            </div>
            <div>
            <p>B</p><img src={require("./dragon/b.svg")} alt="" />
            </div>
            <div>
            <p>D</p><img src={require("./dragon/d.svg")} alt="" />
            </div>
            <div>
            <p>E</p><img src={require("./dragon/e.svg")} alt="" />
            </div>
            <div>
            <p>EI</p><img src={require("./dragon/e2.svg")} alt="" />
            </div>
            <div>
            <p>EY</p><img src={require("./dragon/e3.svg")} alt="" />
            </div>
            <div>
            <p>F</p><img src={require("./dragon/f.svg")} alt="" />
            </div>
            <div>
            <p>G</p><img src={require("./dragon/g.svg")} alt="" />
            </div>
            <div>
            <p>H</p><img src={require("./dragon/h.svg")} alt="" />
            </div>
            <div>
            <p>I</p><img src={require("./dragon/i.svg")} alt="" />
            </div>
            <div>
            <p>II</p><img src={require("./dragon/i2.svg")} alt="" />
            </div>
            <div>
            <p>IR</p><img src={require("./dragon/i3.svg")} alt="" />
            </div>
            <div>
            <p>J</p><img src={require("./dragon/j.svg")} alt="" />
            </div>
            <div>
            <p>K</p><img src={require("./dragon/k.svg")} alt="" />
            </div>
            <div>
            <p>L</p><img src={require("./dragon/l.svg")} alt="" />
            </div>
            <div>
            <p>M</p><img src={require("./dragon/m.svg")} alt="" />
            </div>
            <div>
            <p>N</p><img src={require("./dragon/n.svg")} alt="" />
            </div>
            <div>
            <p>O</p><img src={require("./dragon/o.svg")} alt="" />
            </div>
            <div>
            <p>OO</p><img src={require("./dragon/o2.svg")} alt="" />
            </div>
            <div>
            <p>P</p><img src={require("./dragon/p.svg")} alt="" />
            </div>
            <div>
            <p>Q</p><img src={require("./dragon/q.svg")} alt="" />
            </div>
            <div>
            <p>R</p><img src={require("./dragon/r.svg")} alt="" />
            </div>
            <div>
            <p>S</p><img src={require("./dragon/s.svg")} alt="" />
            </div>
            <div>
            <p>T</p><img src={require("./dragon/t.svg")} alt="" />
            </div>
            <div>
            <p>U</p><img src={require("./dragon/u.svg")} alt="" />
            </div>
            <div>
            <p>UR</p><img src={require("./dragon/u3.svg")} alt="" />
            </div>
            <div>
            <p>UU</p><img src={require("./dragon/u2.svg")} alt="" />
            </div>
            <div>
            <p>V</p><img src={require("./dragon/v.svg")} alt="" />
            </div>
            <div>
            <p>W</p><img src={require("./dragon/w.svg")} alt="" />
            </div>
            <div>
            <p>X</p><img src={require("./dragon/x.svg")} alt="" />
            </div>
            <div>
            <p>Y</p><img src={require("./dragon/y.svg")} alt="" />
            </div>
            <div>
            <p>Z</p><img src={require("./dragon/z.svg")} alt="" />
            </div>
        </div>
        </div> 
        </React.Fragment>
      )
  }  
}

export default AlfabetoDragon