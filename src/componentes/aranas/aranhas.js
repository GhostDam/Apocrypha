import React from 'react'
import xesc from './media/xesc.png'
import abal from './media/abal.png'
import abdn from './media/abdn.png'
import esc from './media/esc.png'
import xele from './media/xele.png'
import ele from './media/ele.png'
import xfla from './media/xfla.png'
import fla from './media/fla.png'
import xpon from './media/xpon.png'
import pon from './media/pon.png'
import men from './media/men.png'
import sal from './media/sal.png'

import zafiro from './media/zafiro.png'
import amatista from './media/amatista.png'
import rubi from './media/ruby.png'
import esmeralda from './media/esmeralda.png'

import './aranhas.css'

const Aranhas = ()=>{
    return(
        <div className="ver info">
          <div>
              <p>Araña de escarcha explosiva</p>
              <img src={xesc} alt="spider" />
                <div className="hide">
                <p>Abdomen dañado </p>
                <img src={abdn} alt="spider"/>
                <p>Zafiro</p>
                <img src={zafiro} alt="spider"/>
                </div>
            </div>
          <div>
              <p>Araña de escarcha oculta</p>
              <div className="hide">
              <p>abdomen de araña albina</p>
              <img src={abal} alt="spider"/>
              <p>Zafiro</p>
              <img src={zafiro} alt="spider"/>
              <p>Sal</p>
              <img src={sal} alt="spider"/>
              <p></p>
              </div>
            </div>
          <div>
              <p>Araña de escarcha saltarina</p>
              <img src={esc} alt="spider"/>
              <div className="hide">
              <p>abdomen de araña albina</p>
              <img src={abal} alt="spider"/>
              <p>Zafiro</p>
              <img src={zafiro} alt="spider"/>
              </div>
             </div>
          <div>
              <p>Araña eléctrica explosiva</p>
              <img src={xele} alt="spider"/>
              <div className="hide">
              <p>Abdomen dañado </p>
              <img src={abdn} alt="spider"/>
              <p>Amatista</p>
              <img src={amatista} alt="spider"/>
              <p></p>
              <p></p>
              </div>
            </div>
          <div>
              <p>Araña eléctrica oculta</p>
              <div className="hide">
              <p>abdomen de araña albina</p>
              <img src={abal} alt="spider"/>
              <p>Amatista</p>
              <img src={amatista} alt="spider"/>
              <p>Sal</p>
              <img src={sal} alt="spider"/>
              </div>
            </div>
          <div>
              <p>Araña eléctrica saltarina</p>
              <img src={ele} alt="spider"/>
              <div className="hide">
              <p>abdomen de araña albina</p>
              <img src={abal} alt="spider"/>
              <p>Amatista</p>
              <img src={amatista} alt="spider"/>
              </div>
            </div>
          <div>
              <p>Araña flamigera explosiva</p>
              <img src={xfla} alt="spider"/>
              <div className="hide">
              <p>Abdomen dañado </p>
              <img src={abdn} alt="spider"/>
              <p>Rubí</p>
              <img src={rubi} alt="spider"/>
              <p></p>
              <p></p>
              </div>
            </div>
          <div>
                <p>Araña flamigera oculta</p>
                <div className="hide">
                <p>abdomen de araña albina</p>
                <img src={abal} alt="spider"/>
                <p>Rubí</p>
                <img src={rubi} alt="spider"/>
                <p>Sal</p>
                <img src={sal} alt="spider"/>
                <p></p>
                </div>
              </div>
          <div>
              <p>Araña flamigera saltarina</p>
              <img src={fla} alt="spider"/>
              <div className="hide">
              <p>abdomen de araña albina</p>
              <img src={abal} alt="spider"/>
              <p>Rubí</p>
              <img src={rubi} alt="spider"/>
              <p></p>
              <p></p>
              </div>
            </div>
          <div>
            <p>Araña ponzoñosa explosiva</p>
            <img src={xpon} alt="spider"/>
            <div className="hide">
            <p>Abdomen dañado </p>
            <img src={abdn} alt="spider"/>
            <p>Esmeralda</p>
            <img src={esmeralda} alt="spider"/>
            <p></p>
            <p></p>
            </div>
          </div>
          <div>
              <p>Araña ponzoñosa oculta</p>
              <div className="hide">
              <p>abdomen de araña albina</p>
              <img src={abal} alt="spider"/>
              <p>Esmeralda</p>
              <img src={esmeralda} alt="spider"/>
              <p>Sal</p>
              <img src={sal} alt="spider"/>
              <p></p>
              </div>
            </div>
          <div>
              <p>Araña ponzoñosa saltarina</p>
              <img src={pon} alt="spider"/>
              <div className="hide">
              <p>abdomen de araña albina</p>
              <img src={abal} alt="spider"/>
              <p>Esmeralda</p>
              <img src={esmeralda} alt="spider"/>
              <p></p>
              <p></p>
              </div>
            </div>
          <div>
            <p>Araña de control mental</p>
            <img src={men} alt="spider"/>
            <div className="hide">
              <p>abdomen de araña albina</p>
              <img src={abal} alt="spider"/>
              <p>Gema de alma</p>
              <p></p>
              <p></p>
            </div>
             </div>
            <div>
            </div>
          <div>
              <p>Araña oleosa</p>
              <img src={men} alt="spider"/>
              <div className="hide">
                <p>abdomen de araña albina</p>
                <img src={abal} alt="spider"/>
                <p>Aceite enano</p>
                <p></p>
                <p></p>
              </div>
            </div>
      </div>
    )
}

export default Aranhas 