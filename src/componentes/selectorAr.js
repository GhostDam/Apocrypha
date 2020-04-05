import React from 'react'
import ModelAr from './modeladorAr'

class Selector extends React.Component{
    constructor(props){
        super(props)
        this.state = {isMounted: true,model:'spriggan'}
    }

    getModel = (model) =>{
        this.setState(state => 
            ({isMounted: false, model:model}), 
            ()=>{this.setState({isMounted:true})}
             )
    }
    
    startStream = async () =>{
            let stream = null;
            const conf = {
                video: true,
                audio: false
            }
            try {
              stream = await navigator.mediaDevices.getUserMedia(conf);
              /* use the stream */
                console.log(stream)
                const video= document.querySelector('#video')
                video.srcObject = stream;
                video.play();

            } catch(err) {
              /* handle the error */
              alert(err)

            }

        // navigator.getUserMedia = navigator.getUserMedia || navigator.webkitgetUserMedia
        // const conf = {
        //     video: true,
        //     audio: false
        // }
        // navigator.getUserMedia(
        //     conf,
        //     (stream)=>{
        //         const video= document.querySelector('#video')
        //         video.srcObject = stream;
        //         video.play();
        //         this.setState({background: video})
        //     }, 
        //     (err)=>{
        //         console.log(err)
        //     }
        // )
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
                <h3>Selector AR</h3>
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
            <h5>video abajo</h5>
                    <button className='btn btn-danger' onClick={this.startStream}>
                        stream
                    </button>
            <div className="escena">
                <video id="video">
                </video>
                    {isMounted && 
                        <ModelAr
                            mtlfile={require(`./models/${model}.mtl`)} 
                            objfile={require(`./models/${model}.obj`)} 
                            pngfile={require(`./models/${model}.png`)}
                        />
                    }
            </div>
            </React.Fragment>
        )
    }
}

export default Selector