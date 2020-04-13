import React from 'react'
import ModelAr from './modeladorAr'
import {LeftMenu, RightMenu} from '../menus/AsideMenus'

class Selector extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isMounted: true,
            model:'spriggan', 
            background:false,
            stream:false,
            video:true,
            frontCamera:true
        }
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

                this.setState(() => 
                ({
                    isMounted: false,
                    background:true
                }), 
                ()=>{this.setState({isMounted:true})})

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
    
    toggleCamera = async () =>{
           this.stopStream()
           this.setState({ frontCamera: !this.state.frontCamera })
           this.startStream()
           this.setState(() => 
           ({
               isMounted: false
           }), 
           ()=>{this.setState({isMounted:true})})
   }

    foto = () =>{
        const download = document.getElementById("foto");
        const image = document.getElementsByTagName("canvas")[0].toDataURL();
        download.setAttribute("href", image);
    }
  
    componentWillUnmount(){
        this.stopStream()
    }

    getModel = (e) =>{
        let model = e.currentTarget.dataset.model
        this.setState({model:model})
        this.setState(() => 
            ({
                isMounted: false
            }), 
            ()=>{this.setState({isMounted:true})})
    }

    render(){
        return(
            <React.Fragment>
                <LeftMenu header="Modelos">
                    <ul>
                        <li data-model="valesabrecat" onClick={this.getModel}>
                            Gato sable del valle
                        </li>
                        <li data-model="esfera" onClick={this.getModel}>
                            Esfera enana
                        </li>
                        <li data-model="bear" onClick={this.getModel}>
                            Oso de Cueva
                        </li>
                        <li data-model="centurion" onClick={this.getModel}>
                            Centurion Enano
                        </li>
                        <li data-model="cauro" onClick={this.getModel}>
                            Cauro
                        </li>
                        <li data-model="aranaenana" onClick={this.getModel}>
                            Araña enana
                        </li>
                        <li data-model="spriggan" onClick={this.getModel}>
                            spriggan
                        </li>
                        <li data-model="vaca" onClick={this.getModel}>
                            Vaca
                        </li>
                        <li data-model="atronachhielo" onClick={this.getModel}>
                            Atronach de hielo
                        </li>
                        <li data-model="nocturnal" onClick={this.getModel}>
                            Nocturnal
                        </li>
                        <li data-model="namirastatue" onClick={this.getModel}>
                            Estatua de Namira
                        </li>
                        <li data-model="dragon1" onClick={this.getModel}>
                            Dragon
                        </li>
                        <li data-model="capillaazura" onClick={this.getModel}>
                            Estatua de Azura
                        </li>
                        <li data-model="atronachtormenta" onClick={this.getModel}>
                            Atronach de la tormenta
                        </li>
                        <li data-model="bruja" onClick={this.getModel}>
                            Bruja Cuervo
                        </li>
                        <li data-model="aldwall" onClick={this.getModel}>
                            Muro de alduin
                        </li>
                    </ul>
                </LeftMenu>
                <RightMenu header="opciones">
                    <ul>
                        <li onClick={this.startStream}>Usar camara</li>
                        <li onClick={this.stopStream}>Detener Camara</li>
                        { this.state.stream && 
                            <li onClick={this.toggleCamera}>
                                Camara {this.state.frontCamera ? "Trasera" : "Frontal"}
                            </li>
                        }
                    </ul>
                </RightMenu>
                <div className="escena">
                    <video id="video"></video>
                    {this.state.isMounted && 
                        <ModelAr
                            video={this.state.video}
                            background={this.state.background}
                            mtlfile={require(`../models/${this.state.model}/${this.state.model}.mtl`)} 
                            objfile={require(`../models/${this.state.model}/${this.state.model}.obj`)} 
                            pngfile={require(`../models/${this.state.model}/${this.state.model}.png`)}
                        />
                    }
                    { this.state.stream && 
                        <a className="foto" onClick={this.foto} id="foto" download="sky.png">
                            {this.state.frontCamera ? "si": "no"}
                        </a>
                    }
                    <div id="loading"></div>
                </div> 
            </React.Fragment>
        )
    }
}

export default Selector