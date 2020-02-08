import React from 'react'
import {Link} from 'react-router-dom'
import Model from './modelador'

class Selector extends React.Component{
    render(){
        console.log(this.props.match.params.model)
        return(
            <div>
                <nav>
                    <Link to={'./modelos/bear'}>Oso de cueva</Link>
                    <Link to={'./modelos/esfera'}>esfera enana</Link>
                    <Link to={'./modelos/spriggan'}>spriggan</Link>
                </nav>
            </div>
        )
    }
}

export default Selector