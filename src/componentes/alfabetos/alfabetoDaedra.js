import React from 'react'
import image from './media/dael.png'
import './alfabeto.css'


function AlfabetoDaedra (){
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
            <p>C</p><img src={require("./daedra/c.svg")} alt="" />
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
        </React.Fragment>
    )
}  
export default AlfabetoDaedra