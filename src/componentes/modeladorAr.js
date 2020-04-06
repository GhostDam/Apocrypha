import React from 'react';
//import three
import * as THREE from 'three'  //npm three
//import three
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader' //npm mtl-obj

const style = {
  height: 600, // we can control scene size by setting container dimensions
};

//function component
class Model extends React.Component {
  componentDidMount(){
      this.setup()
      this.modelsLoader()
      this.viewerAnimate()
      window.addEventListener('resize', this.windowResizer)
      window.addEventListener('keydown', this.onKeyDown)
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.windowResizer);
      window.cancelAnimationFrame(this.requestID);
      this.controls.dispose();
    }

  setup = () =>{
    const width = this.el.clientWidth
    const height = this.el.clientHeight 
    //scene and camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, //fov (field of view)
      width/height, //aspect ratio 
      0.1, //near plane
      1000 //far plane
      )
    this.camera.position.z = 200;
      //renderer
    this.controls = new OrbitControls(this.camera, this.el);


    //setup video as texture to background
    this.texture = new THREE.VideoTexture(this.props.video)
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.format = THREE.RGBFormat;

    
    //alpha da el background transparente
    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: this.props.background});
          // renderer.setClearColor("#e5e5e5");
    //escena de fondo
    this.scene.background = (this.props.background ? this.texture : false)



    this.renderer.setSize(width, height);//def full scr
    this.el.appendChild(this.renderer.domElement);  
  }

  modelsLoader = ()=>{
    //item loaders
    const objLoader = new OBJLoader();  
    const mtlLoader = new MTLLoader();
    //texture loader
    const textureLoader = new THREE.TextureLoader();
    const map = textureLoader.load(this.props.pngfile);
    const material = new THREE.MeshPhongMaterial({map: map});
    //var to acces model before callback
    this.parent = new THREE.Group();
    this.scene.add( this.parent );


    mtlLoader.load(this.props.mtlfile, (materials) => {
      materials.preload()
      objLoader.setMaterials(materials)
      objLoader.load(this.props.objfile,(object) => {
        object.traverse( function ( node ) {
          if ( node.isMesh ) node.material = material;    
        });
                                            object.position.y = -81;
                                            object.rotation.x = 11;
                                            object.rotation.y = 0;
                                            object.rotation.z = 35;
                                            // add result callback to scene and var
                                            this.scene.add(object)
                                            this.parent.add(object)
                                          })
    })
    const ambient = new THREE.AmbientLight(0x404040, 6)
    this.scene.add(ambient);
  }
  // ctrl functions
   onKeyDown = (event) => {
    switch (event.key) {
        case 'w':
        this.parent.rotation.x += .05;
        break;
        case 'q':
        this.parent.rotation.y -= .05;            
        break;
        case 's':
        this.parent.rotation.x -= .05;
        break;
        case 'e':
            this.parent.rotation.y += .05;
        break;
        case 'a':
        this.parent.rotation.z -= .05;        
        break;
        case 'd':
            this.parent.rotation.z += .05;
        break;
        case 'ArrowDown':
            this.parent.position.y -= .5;
        break;
        case 'ArrowUp':
            this.parent.position.y += .5;
        break;
        default:
          break;

    }
  }
  //render function
  viewerAnimate = () =>{
    // this.parent.rotation.x += 0.01;
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.viewerAnimate);
  }
  //resizer
  windowResizer = ()=>{
    const width = this.el.clientWidth
    const height = this.el.clientHeight
  
    this.renderer.setSize(width, height);
    this.camera.aspect = width/ height;
    this.camera.updateProjectionMatrix();
  }


render(){
  return(
    <div className='renderer' id="renderer" style={style} ref={ref => (this.el = ref)}/>
  )
}
}

export default Model;
