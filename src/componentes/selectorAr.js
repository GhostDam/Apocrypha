import React from 'react'
import ModelAr from './modeladorAr'

class Selector extends React.Component{
    state = {isMounted: true, 
             model:'spriggan'
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
    render(){
        const {isMounted = true} = this.state;
        const {model = 'spriggan'} = this.state;

        return(
            <div>
            <div className='row'>
                <div className='col-md-4 flex-column'>
                    <button className='btn btn-secondary' onClick={()=> this.getModel('valleysaber')}>
                        valleysaber
                    </button>
                    <button className='btn btn-secondary' onClick={()=> this.getModel('esfera')}>
                        esfera
                    </button>
                    <button className='btn btn-secondary' onClick={()=> this.getModel('bear')}>
                        Oso de Cueva
                    </button>
                    <button className='btn btn-secondary' onClick={()=> this.getModel('centurion')}>
                        Centurion Enano
                    </button>
                    <button className='btn btn-secondary' onClick={()=> this.getModel('cauro')}>
                        Cauro
                    </button>

                    <button className='btn btn-secondary' onClick={()=> this.getModel('aranaenana')}>
                        Araña enana
                    </button>
                    <button className='btn btn-secondary' onClick={()=> this.getModel('spriggan')}>
                        spriggan
                    </button>
                    <button className='btn btn-secondary' onClick={()=> this.getModel('vaca')}>
                        Vaca
                    </button>

                    <button className='btn btn-secondary' onClick={()=> this.getModel('atronachhielo')}>
                        Atronach de hielo
                    </button>


                    <button className='btn btn-secondary' onClick={()=> this.getModel('atronachtormenta')}>
                        Atronach de la tormenta
                    </button>


                </div>
                <div className='col-md-8'>
                    {isMounted && 
                    <div> 
                        <ModelAr
                            mtlfile={require(`./models/${model}.mtl`)} 
                            objfile={require(`./models/${model}.obj`)} 
                            pngfile={require(`./models/${model}.png`)}
                        />
                        </div>
                    }
                </div>
            </div>
            </div>
        )
    }
}

export default Selector