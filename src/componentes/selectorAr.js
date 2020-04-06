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
            video:true
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
                video: true, //{ facingMode: { exact: "environment" } }
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
                this.getModel()
            } catch(err) {
                /* handle the error */
                alert(err)
            }
        }

        stopStream = () =>{
            if (this.state.stream) {
                this.state.stream.getTracks().forEach(track => track.stop())
            }
        }


    foto = () =>{
        var download = document.getElementById("foto");
        var image = document.getElementsByTagName("canvas")[0].toDataURL("image/octet-stream");
        // download.setAttribute("href", image);
        console.log(image)
    }

    verAlfa = () =>{
        this.setState({
           verAlfabeto: !this.state.verAlfabeto
        })
     }

    componentWillUnmount(){
        this.stopStream()
    }
    
     render(){
        const {isMounted = true} = this.state;
        const {model = 'spriggan'} = this.state;
        return(
            <React.Fragment>
            <div className={this.state.verAlfabeto ? "left_in fade_in info" : "left_in" } onClick={this.verAlfa}>
                <button className="button_fade_left" onClick={this.verAlfa}></button>
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

            <button className='btn btn-danger' onClick={this.startStream}>
                VR
            </button>
            <button className='btn btn-danger' onClick={this.stopStream}>
                stop VR
            </button>

                <div className="escena">
                    <video id="video">
                    </video>
                        {isMounted && 
                            <ModelAr
                                video={this.state.video}
                                background={this.state.background}
                                mtlfile={require(`./models/${model}.mtl`)} 
                                objfile={require(`./models/${model}.obj`)} 
                                pngfile={require(`./models/${model}.png`)}
                            />
                        }
                </div>
            <a className="btn btn-secondary" onClick={this.foto} id="foto" download="sky.png">foto</a>
            </React.Fragment>
        )
    }
}

export default Selector