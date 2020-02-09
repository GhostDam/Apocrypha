import React from 'react'
import {Link} from 'react-router-dom'

class Selector extends React.Component{
    render(){
        return(
            <div>
                <nav className='navbar'>
                    <Link className='btn btn-secondary' to={'./modelos/bear'}>Oso de cueva</Link>
                    <Link className='btn btn-secondary' to={'./modelos/esfera'}>esfera enana</Link>
                    <Link className='btn btn-secondary' to={'./modelos/spriggan'}>spriggan</Link>
                    <Link className='btn btn-secondary' to={'./modelos/aranaenana'}>Araña enana</Link>
                    <Link className='btn btn-secondary' to={'./modelos/cauro'}>cauro</Link>
                    <Link className='btn btn-secondary' to={'./modelos/centurion'}>Centurion</Link>
                    <Link className='btn btn-secondary' to={'./modelos/valleysaber'}>Gato sable del Valle</Link>
                    <Link className='btn btn-secondary' to={'./modelos/vaca'}>Vaca</Link>
                </nav>
            </div>
        )
    }
}

export default Selector