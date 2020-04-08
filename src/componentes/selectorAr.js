import React from 'react'
import ModelAr from './modeladorAr'

class Selector extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isMounted: true,
            model:'spriggan', 
            background:false,
            stream:false,
            video:true,
            frontCamera:false
        }
    }

    getModel = (model) =>{
        this.setState(state => 
            ({isMounted: false, model:model}), 
            ()=>{this.setState({isMounted:true})}
        )
    }
    
    startStream = async () =>{
            const conf = {
                video: { facingMode: { exact: this.state.frontCamera ? "user": "environment" } }, //
                audio: false
            }
            try {
                const stream = await navigator.mediaDevices.getUserMedia(conf);
                this.state.stream = stream
              /* use the stream */
                this.state.video = document.querySelector('#video')
                this.state.video.srcObject = stream;
                this.state.video.play();
                this.setState({background:true})
                this.getModel(this.state.model)
            } catch(err) {
                /* handle the error */
                alert(err)
            }
        }

    stopStream = () =>{
        if (this.state.stream) {
            this.state.stream.getTracks().forEach(track => track.stop())
            this.setState({stream:false})
        }
    }


    foto = () =>{
        const download = document.getElementById("foto");
        const image = document.getElementsByTagName("canvas")[0].toDataURL();
        download.setAttribute("href", image);
    }

    verAlfa = () =>{
        this.setState({
           verAlfabeto: !this.state.verAlfabeto
        })
     }
     verPrev = () =>{
        this.setState({
           verPrevio: !this.state.verPrevio
        })
     }
  
     toggleCamera = async () =>{
            this.stopStream()
            this.setState({ frontCamera: !this.state.frontCamera })
            this.startStream()
            this.getModel(this.state.model)
     }

    componentWillUnmount(){
        this.stopStream()
    }
    
     render(){
        return(
            <React.Fragment>
                <button className="button_fade_left" onClick={this.verAlfa}>Modelos</button>
                <button className="button_fade_right" onClick={this.verPrev}>Opciones</button>
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
                    <li onClick={()=> this.getModel('nocturnal')}>
                        Nocturnal
                    </li>
                </ul>
            </div>
            <div className={this.state.verPrevio ? "right_in fade_in info" : "right_in" } onClick={this.verPrev}>
                <button className='btn btn-danger' onClick={this.startStream}>
                    VR
                </button>
                <button className='btn btn-danger' onClick={this.stopStream}>
                    stop VR
                </button>

                { this.state.stream && 
                    <button className='btn btn-danger' onClick={this.toggleCamera}>
                        Camara {this.state.frontCamera ? "Trasera" : "Frontal"}
                    </button>
                }


            </div>

                <div className="escena">
                    <video id="video">
                    </video>
                        {this.state.isMounted && 
                            <ModelAr
                                video={this.state.video}
                                background={this.state.background}
                                mtlfile={require(`./models/${this.state.model}.mtl`)} 
                                objfile={require(`./models/${this.state.model}.obj`)} 
                                pngfile={require(`./models/${this.state.model}.png`)}
                            />
                        }
                        { this.state.stream && 
                            <a className="foto" onClick={this.foto} id="foto" download="sky.png">
                                {this.state.frontCamera ? "si": "no"}
                            </a>
                        }

                </div>
 
            </React.Fragment>
        )
    }
}

export default Selector