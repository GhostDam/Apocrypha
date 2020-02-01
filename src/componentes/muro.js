import React from 'react'


class Muro extends React.Component {
    // p.dovah find("ah",replace('1'))
    setter = (text) =>{
        return ( text.toLowerCase().replace(/aa/g, "1").replace(/ah/g, "2").replace(/ei/g, "3").replace(/ey/g, "4")
                .replace(/ii/g, "5").replace(/ir/g, "6").replace(/oo/g, "7").replace(/ur/g, "9")
                .replace(/uu/g, "8")
                )
    }
    render(){
        return <div className='muro' style={{backgroundImage: this.props.ubicacion}}>
                <img src={this.props.ubicacion} alt='ubicacion' />  
                <div className='info'>
                    <h1>{this.props.nombre}</h1>
                    <h2>{this.props.grito}</h2>
                    <hr/>
                    <div className='linea1'>
                        <p className='dovah'>{this.setter(this.props.dovah1)}</p>    
                        <p className='lengua'>{this.props.dovah1}</p>
                        <p className='español'>{this.props.español1}</p>
                    </div>
                    <hr/>
                    <div className='linea2'>
                        <p className='dovah'>{this.setter(this.props.dovah2)}</p>
                        <p className='lengua'>{this.props.dovah2}</p>
                        <p className='español'>{this.props.español2}</p>
                    </div>
                    <hr/>
                    <div className='linea3'>
                        <p className='dovah'>{this.setter(this.props.dovah3)}</p>    
                        <p className='lengua'>{this.props.dovah3}</p>
                        <p className='español'>{this.props.español3}</p>
                    </div>
                    <hr/>
                    <div className='linea4'>
                        <p className='dovah'>{this.setter(this.props.dovah4)}</p>    
                        <p className='lengua'>{this.props.dovah4}</p>
                        <p className='español'>{this.props.español4}</p>
                    </div>
              </div>
                </div>
    }
}

export default Muro