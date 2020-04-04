import React from 'react'
import Model from './modelador'

class Selector extends React.Component{
    state = {isMounted: true, 
             model:'spriggan',
             verAlfabeto: false
            }


    getModel = (model) =>{
        this.setState(state => 
            ({isMounted: false, model:model}), 
            ()=>this.renderAgain()
             )
    }

    renderAgain = () =>{
         this.setState({isMounted:true})
     }       

     verAlfa = () =>{
        this.setState({
           verAlfabeto: !this.state.verAlfabeto
        })
     }
  

     render(){
        const {isMounted = true} = this.state;
        const {model = 'spriggan'} = this.state;

        return(
            <React.Fragment>
            <button className="button_fade_left" onClick={this.verAlfa}></button>
            <div className={this.state.verAlfabeto ? "left_in fade_in info" : "left_in" } onClick={this.verAlfa}>
                <ul>
                    <li onClick={()=> this.getModel('valleysaber')}>
                        valleysaber
                    </li>
                    <li onClick={()=> this.getModel('esfera')}>
                        esfera
                    </li>
                    <li onClick={()=> this.getModel('bear')}>
                        Oso de Cueva
                    </li>
                    <li onClick={()=> this.getModel('centurion')}>
                        Centurion Enano
                    </li>
                    <li onClick={()=> this.getModel('cauro')}>
                        Cauro
                    </li>
                    <li onClick={()=> this.getModel('aranaenana')}>
                        Araña enana
                    </li>
                    <li onClick={()=> this.getModel('spriggan')}>
                        spriggan
                    </li>
                    <li onClick={()=> this.getModel('vaca')}>
                        Vaca
                    </li>
                    <li onClick={()=> this.getModel('atronachhielo')}>
                        Atronach de hielo
                    </li>
                    <li onClick={()=> this.getModel('atronachtormenta')}>
                        Atronach de la tormenta
                    </li>
                    <li onClick={()=> this.getModel('bruja')}>
                        Bruja Cuervo
                    </li>
                    <li onClick={()=> this.getModel('aldwall')}>
                        Muro de alduin
                    </li>
                </ul>

            </div>
                <div>
                    {isMounted && 
                    <div> 
                        <Model 
                            mtlfile={require(`./models/${model}.mtl`)} 
                            objfile={require(`./models/${model}.obj`)} 
                            pngfile={require(`./models/${model}.png`)}
                        />
                        </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Selector