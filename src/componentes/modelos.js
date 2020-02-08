import React from 'react'
import {Link} from 'react-router-dom'
import Model from './modelador'

class Modelos extends React.Component{
    render(){
        console.log(this.props.match.params.model)
        return(
            <div>
                    <Model 
                    mtlfile={require(`./models/${this.props.match.params.model}.mtl`)} 
                    objfile={require(`./models/${this.props.match.params.model}.obj`)} 
                    pngfile={require(`./models/${this.props.match.params.model}.png`)}
                    />
            </div>
        )
    }
}

export default Modelos