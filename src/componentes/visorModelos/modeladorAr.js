import React from 'react';
//import three
import * as THREE from 'three'  //npm three
//import three
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader' //npm mtl-obj

///vR
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

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
      this.renderer.dispose()
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
      10000 //far plane  
      )
    this.camera.position.set(0,200,200);
    
    //////=======================testing===================/////  
      // this.camera.lookAt()

    //sfere reference
    //   //cero 
    //   const geometry0 = new THREE.SphereGeometry( 5, 32, 32 );
    //   const material0 = new THREE.MeshBasicMaterial( {color: "red"} );
    //   const sphere0 = new THREE.Mesh(geometry0, material0 );
    //   sphere0.position.set(0, 0 ,0)
    //   //minus x
    //   const geometry1 = new THREE.SphereGeometry( 5, 32, 32 );
    //   const material1 = new THREE.MeshBasicMaterial( {color: "green"} );
    //   const sphere1 = new THREE.Mesh(geometry1,material1 );
    //   sphere1.position.set(-100, 0 ,0)
    //   //mayus x
    //   const geometry2 = new THREE.SphereGeometry( 5, 32, 32 );
    //   const material2 = new THREE.MeshBasicMaterial( {color: "pink"} );
    //   const sphere2 = new THREE.Mesh(geometry2,material2 );
    //   sphere2.position.set(100, 0 ,0)
    //   //mayus y
    //   const geometry3 = new THREE.SphereGeometry( 5, 32, 32 );
    //   const material3 = new THREE.MeshBasicMaterial( {color: "yellow"} );
    //   const sphere3 = new THREE.Mesh( geometry3, material3 );
    //   sphere3.position.set(0, 0 ,100)

    //   const geometry4 = new THREE.SphereGeometry( 5, 32, 32 );
    //   const material4 = new THREE.MeshBasicMaterial( {color: "blue"} );
    //   const sphere4 = new THREE.Mesh(geometry4,material4 );
    //   sphere4.position.set(0, 0 ,-100)

    //   const geometry5 = new THREE.SphereGeometry( 5, 32, 32 );
    //   const material5 = new THREE.MeshBasicMaterial( {color: "white"} );
    //   const sphere5 = new THREE.Mesh(geometry5,material5 );
    //   sphere5.position.set(0, 100 ,0)

    //   this.scene.add( sphere0, sphere1, sphere2, sphere3, sphere4, sphere5 );

    // //floor
    // this.meshFloor = new THREE.Mesh(
    //   new THREE.PlaneGeometry(200,200, 10,10),
    //   new THREE.MeshBasicMaterial({color:0xffffff, wireframe: true})
    // );

    // this.meshFloor.rotateX( - Math.PI / 2);
    // this.scene.add(this.meshFloor);

    //////======================= close testing===================/////

    //renderer
    this.controls = new OrbitControls(this.camera, this.el);

    //setup video as texture to background
    this.texture = new THREE.VideoTexture(this.props.video)
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.format = THREE.RGBFormat;
    
    //alpha da el background transparente
    this.renderer = new THREE.WebGLRenderer({
                                              antialias: true, 
                                              alpha: this.props.background,
                                              preserveDrawingBuffer: true, //requerido para capturas
                                            });
    //escena de fondo
    this.scene.background = (this.props.background ? this.texture : false)
    //luz ambiental
    const ambient = new THREE.AmbientLight(0x404040, 6)
    this.scene.add(ambient);
    //vR
    // this.el.appendChild( VRButton.createButton( this.renderer ) );
    window.document.body.appendChild( VRButton.createButton( this.renderer ) );
    this.renderer.xr.enabled = true;

    this.renderer.setSize(width, height);//def full scr
    this.el.appendChild(this.renderer.domElement);  
  }

  modelsLoader = ()=>{    
    //props
    const {pngfile, objfile, mtlfile} = this.props
    //item loaders
    const objLoader = new OBJLoader();  
    const mtlLoader = new MTLLoader();
    const textureLoader = new THREE.TextureLoader();
    //texture loader
    const map = textureLoader.load(pngfile);
    const material = new THREE.MeshPhongMaterial({map: map});
    //var to acces model before callback
    this.parent = new THREE.Group();
    this.scene.add( this.parent );

      mtlLoader.load(mtlfile, (materials) => {
      materials.preload()
      objLoader.setMaterials(materials)
      objLoader.load(objfile,(object) => {
        object.traverse( function ( node ) {
          if ( node.isMesh ) node.material = material;    
        });
        object.rotation.x = -1.5;
        object.rotation.z = 3.15;

        // add result callback to scene and var
        this.scene.add(object)
        this.parent.add(object)
        const box = new THREE.Box3().setFromObject( object );
        console.log(box)
        console.log(box.min.y, box.max.y, box.max.y/2)

        // this.camera.lookAt(0, 100, box.max.y/2)
        this.camera.lookAt(new THREE.Vector3(0,0,0))
      })
    })

  }

  // ctrl functions
  //  onKeyDown = (event) => {
  //   console.log(this.parent.rotation)
  //   switch (event.key) {
  //       case 'w':
  //       this.parent.rotation.x += .05;
  //       break;
  //       case 'q':
  //       this.parent.rotation.y -= .05;            
  //       break;
  //       case 's':
  //       this.parent.rotation.x -= .05;
  //       break;
  //       case 'e':
  //           this.parent.rotation.y += .05;
  //       break;
  //       case 'a':
  //       this.parent.rotation.z -= .05;        
  //       break;
  //       case 'd':
  //           this.parent.rotation.z += .05;
  //       break;
  //       case 'ArrowDown':
  //           this.parent.position.y -= .5;
  //       break;
  //       case 'ArrowUp':
  //           this.parent.position.y += .5;
  //       break;
  //   }
  // }
  //render function
  viewerAnimate = () =>{
    this.renderer.render(this.scene, this.camera);
    this.renderer.setAnimationLoop(this.viewerAnimate)

    // this.requestID = window.requestAnimationFrame(this.viewerAnimate);
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
      <div className='renderer' id="renderer" ref={ref => (this.el = ref)}/>
  )
}
}

export default Model;
