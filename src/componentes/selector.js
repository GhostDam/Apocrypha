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