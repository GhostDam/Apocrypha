import React from 'react'

import mtlfile from './models/spriggan.mtl'
import objfile from './models/spriggan.obj' 
import pngfile from './models/spriggan.png'


import Model from './modelador'

class Modelos extends React.Component{
    render(){
        return(
            <div>
                <h1>spriggan</h1>
                <Model mtlfile={mtlfile} objfile={objfile} pngfile={pngfile}/>
            </div>
        )
    }
}

export default Modelos